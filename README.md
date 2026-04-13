# cash-app

Eine Kasse für Vereinsfeste. Läuft offline auf iPad/iPhone.

**App:** https://fbumann.github.io/cash-app/

## Einrichten

Einmal mit Internetverbindung:

1. In Safari `fbumann.github.io/cash-app` öffnen.
2. Teilen-Symbol → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Ab jetzt nur noch über das Symbol auf dem Home-Bildschirm starten.
<table>
  <tr>
    <td align="center" width="25%">Teile die Website</td>
    <td align="center" width="25%">Wähle "Zum Homescreen hinzufügen"</td>
    <td align="center" width="25%">Wähle einen Namen für deine App und drücke "Hinzufügen"</td>
    <td align="center" width="25%">Die App ist offline gespeichert und bereit</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0ffc18ae-0107-4e14-9c0e-4749b6afb971" width="200" /></td>
    <td><img src="https://github.com/user-attachments/assets/7246fb5a-7ef5-4d52-be2e-2b6c74198196" width="200" /></td>
    <td><img src="https://github.com/user-attachments/assets/140d5fe0-ac44-4a77-8162-407d3edb7d2b" width="200" /></td>
    <td><img src="https://github.com/user-attachments/assets/8f2b8254-92cf-4642-8716-955d237bcb22" width="200" /></td>
  </tr>
  <tr>
    <td align="center">1</td>
    <td align="center">2</td>
    <td align="center">3</td>
    <td align="center">4</td>
  </tr>
</table>


## Bedienen

- **Kasse** – Artikel antippen → Warenkorb → **Kassieren** → Bargeld eingeben → **Bestätigen**.
- **Menü** – In der Bibliothek Artikel anlegen, mit `+` ins heutige Menü übernehmen.
- **Tag** – Umsatz und Bestellungen, **CSV exportieren**, am Ende **Tag zurücksetzen**.

## Sicherung

Die **angelegten Artikel werden als Bibliothek gespeichert**. Die angelegte Bibliothek kann **auf ein anderes Gerät übertragen** werden.
Dafür im Tab **Menü → Sicherung** die Bibliothek als Datei herunterladen und auf einem anderen Gerät importieren. 

*Mach das ab und zu — die Datei ist auch dein Backup.*

## Wichtig

- ✅ Vor jedem Fest kurz in den Tab **Tag** schauen — sollte leer sein. Falls nicht: erst CSV exportieren, dann **Tag zurücksetzen**.
- ✅ Nach jedem Fest **CSV exportieren**, dann **Tag zurücksetzen**.
- ❌ Nicht das App-Symbol löschen — sonst sind alle Daten weg.
- ❌ Nicht in Safari „Verlauf und Websitedaten löschen" — gleiches Problem.
- ❌ Keine Synchronisation zwischen Geräten. Jedes Gerät hat seine eigene Kasse.

## Updates

Die App aktualisiert sich **nie von selbst**. Einmal installiert, läuft sie auf genau der Version, mit der sie installiert wurde — auch wenn du sie mit WLAN öffnest.

Wenn du wirklich eine neue Version willst:

1. Im Tab **Menü** die aktuelle Biblothek exportieren (Sicherung!).
2. App-Symbol vom Home-Bildschirm löschen.
3. In Safari erneut `fbumann.github.io/cash-app` öffnen und **Zum Home-Bildschirm** hinzufügen.
4. Biblothek wieder importieren.

> **Tipp:** Updates nie kurz vor einer Veranstaltung. Und nicht vergessen: offene Bestellungen im Tab **Tag** gehen bei der Neuinstallation verloren — vorher CSV exportieren.

### Zurück auf eine ältere Version

Falls eine neue Version Probleme macht, kannst du eine bestimmte alte Version installieren. Jede veröffentlichte Version liegt unter einer eigenen URL:

```
fbumann.github.io/cash-app/versions/v18/
fbumann.github.io/cash-app/versions/v19/
fbumann.github.io/cash-app/versions/v20/
```

Vorgehen: App-Symbol löschen → gewünschte Versions-URL in Safari öffnen → **Zum Home-Bildschirm**.

> **Warnung:** Die Kasse speichert ihre Daten (Bibliothek, aktives Menü, Tag) in einem Bereich, den sich **alle Versionen teilen**. Eine ältere Version kennt neuere Felder (z. B. Artikel-Farben) nicht und entfernt sie beim Speichern. Beim Rollback also unbedingt **vorher die Bibliothek exportieren** — im Ernstfall kannst du die Farben und anderes später manuell wiederherstellen.

## Für Entwickler

Eine einzige `index.html` plus `sw.js` (Service Worker für Offline). Reines HTML/CSS/JavaScript. Kein Build, keine Abhängigkeiten. `// @ts-check` + JSDoc für Typprüfung im Editor. Daten in `localStorage`. CSV-Export per `Blob`-Download. Sprache: Deutsch, EUR mit `,` als Dezimaltrenner.

Lokale Vorschau: `npx serve -l 3000 . & open http://localhost:3000`

### Release-Workflow

Push auf `main` mit einer neuen `APP_VERSION` triggert `.github/workflows/release.yml`:

1. Tag `vN` wird angelegt, GitHub Release mit Notes aus den Commit-Messages seit dem letzten Tag.
2. `index.html` + `sw.js` werden auf den `gh-pages`-Branch deployed — einmal im Root (latest) und einmal nach `versions/vN/` (Rollback-Ziel).
3. GitHub Pages serviert aus `gh-pages`, nicht aus `main`. `main` bleibt reiner Source-Code, alle veröffentlichten Artefakte leben in `gh-pages`.
