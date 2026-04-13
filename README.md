# cash-app

Eine Kasse für Vereinsfeste. Läuft offline auf iPad/iPhone.

**App:** https://fbumann.github.io/cash-app/

## Einrichten

Einmal mit WLAN:

1. In Safari `fbumann.github.io/cash-app` öffnen.
2. Teilen-Symbol → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Ab jetzt nur noch über das Symbol auf dem Home-Bildschirm starten.

## Bedienen

- **Kasse** – Artikel antippen → Warenkorb → **Kassieren** → Bargeld eingeben → **Bestätigen**.
- **Menü** – In der Bibliothek Artikel anlegen, mit `+` ins heutige Menü übernehmen.
- **Tag** – Umsatz und Bestellungen, **CSV exportieren**, am Ende **Tag zurücksetzen**.

## Sicherung

Im Tab **Menü → Sicherung** kannst du die Bibliothek als Datei herunterladen und später wieder importieren. Mach das ab und zu — die Datei ist dein Backup.

## Wichtig

- ✅ Vor jedem Fest kurz in den Tab **Tag** schauen — sollte leer sein. Falls nicht: erst CSV exportieren, dann **Tag zurücksetzen**.
- ✅ Nach jedem Fest **CSV exportieren**, dann **Tag zurücksetzen**.
- ❌ Nicht das App-Symbol löschen — sonst sind alle Daten weg.
- ❌ Nicht in Safari „Verlauf und Websitedaten löschen" — gleiches Problem.
- ❌ Keine Synchronisation zwischen Geräten. Jedes Gerät hat seine eigene Kasse.

## Updates

Die App aktualisiert sich **nie von selbst**. Einmal installiert, läuft sie auf genau der Version, mit der sie installiert wurde — auch wenn du sie mit WLAN öffnest.

Wenn du wirklich eine neue Version willst:

1. Im Tab **Menü → Vorlagen** die aktuelle Vorlage exportieren (Sicherung!).
2. App-Symbol vom Home-Bildschirm löschen.
3. In Safari erneut `fbumann.github.io/cash-app` öffnen und **Zum Home-Bildschirm** hinzufügen.
4. Vorlage wieder importieren.

> **Tipp:** Updates nie kurz vor einer Veranstaltung. Und nicht vergessen: offene Bestellungen im Tab **Tag** gehen bei der Neuinstallation verloren — vorher CSV exportieren.

## Für Entwickler

Eine einzige `index.html` plus `sw.js` (Service Worker für Offline). Reines HTML/CSS/JavaScript. Kein Build, keine Abhängigkeiten. `// @ts-check` + JSDoc für Typprüfung im Editor. Daten in `localStorage`. CSV-Export per `Blob`-Download. Sprache: Deutsch, EUR mit `,` als Dezimaltrenner.

Lokale Vorschau: `npx serve -l 3000 . & open http://localhost:3000`
