# Maze Tanks

Gra w czołgi w przeglądarce na komputerze, widok z góry. Jedź przez labirynt, strzelaj z rykoszetu i zniszcz przeciwników, zanim oni zniszczą Ciebie.

**Zagraj online:** https://mjwawa.github.io/maze_tanks_web/

Na telefon i tablet jest osobna wersja ze sterowaniem dotykowym: [Maze Tanks Mobile](https://mjwawa.github.io/maze_tanks_mobile/).

## Jak grać

| | Jazda | Strzał |
|---|---|---|
| Gracz 1 | strzałki ← ↑ → ↓ | Spacja |
| Gracz 2 | W A S D | Q |

- **Enter** – dalej (Graj → Start → Rewanż), **Esc** / **P** – pauza, **M** – dźwięk wł./wył.
- Lufa strzela tam, gdzie patrzy czołg.

## Tryby i mapy

- 1 gracz przeciw 1–3 botom albo 2 graczy na jednej klawiaturze (z botami lub bez)
- Trzy poziomy botów: łatwy, normalny, trudny
- Mapy (labirynt losuje się w każdej rundzie):
  - **Las** – kłody, świerki, dęby
  - **Pole** – kamienne murki, bele siana
  - **Miasto** – ceglane mury, beczki, pachołki, kosze, latarnie
  - **Noc w mieście** – miasto po zmroku, światło latarni i reflektorów czołgów
  - **Pustynia** – mury z gliny, kaktusy, głazy
  - **Zima** – zaspy, ośnieżone choinki, bałwany
  - **Baza wojskowa** – worki z piaskiem, beczki paliwa, skrzynie, opony
  - **Księżyc** – metalowe panele, skały, anteny, kratery

## Zasady specjalne map

Każda mapa ma swoją zasadę specjalną. Jej nazwa pojawia się na początku rundy, a opis – w ustawieniach pod wyborem mapy:

| Mapa | Zasada |
|---|---|
| Las | **Kryjówki w krzakach** – przez krzaki można przejechać i się w nich schować, pociski przez nie przelatują |
| Pole | **Wiatr** – znosi pociski; kierunek i siłę pokazuje strzałka u góry |
| Miasto | **Płonące samochody** – żar wraków parzy od razu po wjechaniu i zabiera 1 punkt pancerza co 0,6 s |
| Noc w mieście | **Ciemno** – widać tylko to, co jest w świetle; strzał zdradza pozycję |
| Pustynia | **Grząski piasek** – po długiej jeździe czołg grzęźnie; postój lub cofanie uwalnia |
| Zima | **Ślisko** – czołgi ślizgają się, na zamarzniętych kałużach jeszcze bardziej |
| Baza wojskowa | **Skrzynie z amunicją** – wybuchają po najechaniu lub trafieniu; worki z piaskiem pochłaniają pociski |
| Księżyc | **Nieważkość** – czołgi dryfują; pociski lecą wolniej, ale odbijają się 2 razy więcej |

## Zasady

- Pociski odbijają się od ścian i drzew. Uważaj, własny rykoszet też zabiera życie.
- Pocisk ma kolor czołgu, który go wystrzelił. Gdy mruga, nie ma już odbić w zapasie – przy następnej ścianie zniknie.
- Żółte kropki pod paskiem pancerza Twojego czołgu to pociski gotowe do strzału (zgaszona kropka – pocisk jeszcze leci).
- Każda runda zaczyna się odliczaniem 3, 2, 1. Rundę wygrywa ostatni czołg na polu bitwy.
- Jeśli zniszczone zostaną wszystkie czołgi graczy, a na polu zostało kilka botów, punkt dostaje bot, który pokonał ostatniego gracza (a gdy ten zginął od rykoszetu, żaru lub wybuchu – najmniej uszkodzony bot).
- Kto pierwszy wygra 5 rund (albo 3 lub 7, do wyboru w menu), zdobywa **złoty medal**. Medale zbierają się w gablocie.

## Rodzaje czołgów

| | Lis (lekki) | Wilk (średni) | Niedźwiedź (ciężki) |
|---|---|---|---|
| Prędkość | szybki | średni | wolny |
| Pancerz | 4 | 4 | 7 |
| Siła rażenia | 1 | 2 | 2 |
| Tempo strzałów | bardzo szybkie | średnie | wolne |
| Pociski naraz | 6 | 4 | 2 |
| Odbicia pocisku | 3 | 3 | 2 |
| Wygląd | smukły, wieża z przodu, krótka lufa | wieża z tyłu, długa lufa | szeroki, duża wieża, krótka gruba lufa |

## Zainstaluj jako aplikację

- **Chrome / Edge (Mac, PC):** przycisk *Zainstaluj jako aplikację* w menu gry albo ikona instalacji w pasku adresu
- **Safari (Mac):** Plik → *Dodaj do Docka*

Po pierwszym uruchomieniu gra działa offline. Nowe wersje z GitHuba pobierają się same przy starcie, gdy jest internet.

## Technicznie

Cała gra to plik `index.html` (HTML + JavaScript, rysowanie na canvasie, dźwięki generowane przez Web Audio API) i czcionki w folderze `fonts/`. Nie potrzebuje serwera gry ani instalacji – wystarczy zwykły hosting plików, np. GitHub Pages.

Pliki aplikacji: `manifest.webmanifest` (nazwa, ikony), `sw.js` (praca offline – zapisuje stronę, czcionki i ikony), ikony `icon-512.png`, `icon-maskable-512.png`, `favicon-*.png`, `favicon.svg`, `apple-touch-icon.png`.
