# Vereinskasse

Eine Kassen-App als einzelne HTML-Datei für Vereinsveranstaltungen. Läuft in Safari auf iPad/iPhone, funktioniert komplett offline, ohne Installation und ohne Konto.

## Verwendung

1. `index.html` in Safari öffnen (oder in einem beliebigen modernen Browser).
2. Auf iPad/iPhone: **Teilen → Zum Home-Bildschirm** tippen, um die App im Vollbild zu installieren.
3. Fertig. Kein Build, kein Server, nach dem ersten Laden auch kein Internet nötig.

## Funktionen

- **Kasse** – Tipp-Raster mit Menüartikeln, Warenkorb mit Mengen-Steuerung, Zahlungsbildschirm mit Bareingabe, automatischer Wechselgeld-Berechnung und Schnellauswahl-Knöpfen (nächste Aufrundung + 5/10/20/50 €).
- **Menü** – Zwei-Listen-Editor: eine dauerhafte **Bibliothek** aller Artikel, die du je verkaufst, und ein **aktives Menü** für die aktuelle Veranstaltung. Artikel hinzufügen, löschen und ins heutige Menü übernehmen.
- **Tag** – Tagesumsatz, Liste aller Bestellungen, **CSV-Export** (Semikolon-getrennt, UTF-8 BOM, Komma als Dezimaltrenner — öffnet sauber in Numbers/Excel) und ein **Tag zurücksetzen**, das Bestellungen + aktives Menü löscht, die Bibliothek aber behält.

## Daten

Alles liegt im `localStorage`:

| Schlüssel | Inhalt | Bleibt nach Tag-Reset? |
| --- | --- | --- |
| `club-register-reusables` | Artikel-Bibliothek | ja |
| `club-register-active` | Heutiges aktives Menü | nein |
| `club-register-orders` | Heutige Bestellungen | nein |

Nur die Bibliothek soll eine Veranstaltung überdauern. „Tag zurücksetzen" leert Bestellungen und aktives Menü gemeinsam.

## Technik

- Reines HTML + CSS + JavaScript in einer Datei. Kein Build, keine Abhängigkeiten.
- `// @ts-check` + JSDoc-Typen für Typprüfung im Editor — ohne Build-Schritt.
- Sprache: Deutsche UI-Beschriftungen, EUR mit `,` als Dezimaltrenner.

## Nicht enthalten

Kartenzahlung, Belege, Geräte-Synchronisation, Steuer-/Rechnungs-Konformität, Benutzerkonten.
