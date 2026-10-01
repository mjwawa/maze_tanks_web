// Service worker Maze Tanks (wersja przeglądarkowa) – dzięki niemu gra działa offline jak aplikacja.
// Po zmianie ikon lub innych plików (poza index.html) zwiększ numer wersji poniżej.
const PREFIX = 'maze-tanks-web-';
const CACHE = PREFIX + 'v4';
const ASSETS = [
  './index.html', // strona zapisuje się tylko raz – także adres ./ dostaje tę kopię
  './manifest.webmanifest',
  './fonts/stencil-900-latin.woff2',
  './fonts/stencil-900-latin-ext.woff2',
  './fonts/barlow-500-latin.woff2',
  './fonts/barlow-500-latin-ext.woff2',
  './fonts/barlow-600-latin.woff2',
  './fonts/barlow-600-latin-ext.woff2',
  './fonts/barlow-700-latin.woff2',
  './fonts/barlow-700-latin-ext.woff2',
  './favicon.svg',
  './favicon-32.png',
  './favicon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  // usuwamy tylko własne stare wersje – druga wersja gry (web / mobile) ma osobną pamięć
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Strona gry: najpierw internet (żeby zawsze była najnowsza wersja), bez sieci – zapisana kopia.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await Promise.race([
          fetch(req),
          new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000)),
        ]);
        if (res && res.ok) {
          const copy = res.clone();
          // waitUntil: przeglądarka nie zatrzyma service workera, zanim kopia się zapisze
          e.waitUntil(caches.open(CACHE).then(c => c.put('./index.html', copy)));
        }
        return res;
      } catch (_) {
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // Ikony i pozostałe pliki: najpierw zapisana kopia, w tle odświeżenie.
  // waitUntil jest zgłaszane od razu, bo odpowiedź z kopii może zostać oddana, zanim sieć odpowie.
  const net = fetch(req).then(res => {
    if (!res || !res.ok) return { res };
    const copy = res.clone();
    return { res, saved: caches.open(CACHE).then(c => c.put(req, copy)) };
  });
  e.waitUntil(net.then(r => r.saved).catch(() => {}));
  e.respondWith(caches.match(req).then(hit => hit || net.then(r => r.res).catch(() => Response.error())));
});
