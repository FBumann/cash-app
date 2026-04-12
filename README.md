# cash-app

Eine einfache Kassen-App für Vereinsfeste. Du brauchst nur ein iPad oder iPhone. Kein Internet während der Veranstaltung. Keine App aus dem App Store. Kein Konto.

**Live-App:** https://fbumann.github.io/cash-app/

---

## Erste Einrichtung (nur einmal nötig)

Mach das einmal zu Hause mit WLAN, dann funktioniert die App auf der Veranstaltung ohne Internet.

1. Auf dem iPad/iPhone **Safari** öffnen.
2. In die Adresszeile diese Adresse eingeben: `fbumann.github.io/cash-app`
3. Warten, bis die App geladen ist (Knopf „Kasse" oben sichtbar).
4. Unten in der Mitte (iPad: oben rechts) auf das **Teilen-Symbol** tippen (Quadrat mit Pfeil nach oben).
5. In der Liste nach unten scrollen und **„Zum Home-Bildschirm"** wählen.
6. **„Hinzufügen"** tippen.

Jetzt liegt ein Symbol „cash-app" auf deinem Home-Bildschirm. **Ab jetzt immer dieses Symbol antippen, niemals mehr Safari.**

---

## So nutzt du die App

Die App hat drei Tabs ganz oben:

### 1. Tab „Kasse" – Verkaufen

- Tippe auf einen Artikel → er kommt in den Warenkorb.
- Im Warenkorb mit `+` und `−` Mengen ändern.
- Wenn alles drin ist, **„Kassieren"** tippen.
- Oben steht der zu zahlende Betrag.
- Im Feld **„Gegeben"** tippst du ein, was der Kunde bezahlt (z. B. `20,00`).
- Die App rechnet das **Rückgeld** automatisch aus.
- Knöpfe darunter (5 €, 10 €, 20 €, 50 €) gehen schneller, falls passend.
- **„Bestätigen"** speichert die Bestellung. Fertig.
- Mit **„Abbrechen"** kannst du zurück, ohne zu speichern.

### 2. Tab „Menü" – Was heute verkauft wird

Hier gibt es zwei Listen:

**Aktives Menü (heute)** = was im Tab „Kasse" als Knopf erscheint.

**Bibliothek** = alle Artikel, die du jemals verkaufst. Bleibt für immer gespeichert.

So fügst du Artikel hinzu:
1. Unten im Feld **Name** tippen (z. B. „Bier").
2. Im Feld daneben den **Preis** tippen (z. B. `2,50`).
3. Auf **`+`** tippen.

So nimmst du Artikel ins heutige Menü:
- Tippe in der Bibliothek auf **`+`** neben einem Artikel → er erscheint oben unter „Aktives Menü".
- Mit **`✓`** wieder rausnehmen.
- Mit **`×`** löschst du einen Artikel ganz aus der Bibliothek (kommt eine Sicherheitsfrage).

### 3. Tab „Tag" – Tagesabschluss

- Oben siehst du den **Gesamtumsatz** und die Anzahl der Bestellungen.
- Darunter alle Bestellungen mit Uhrzeit und Betrag.
- **„CSV exportieren"** lädt eine Datei herunter, die du mit Numbers oder Excel öffnen kannst.
- **„Tag zurücksetzen"** löscht alle Bestellungen und das aktive Menü. **Die Bibliothek bleibt erhalten.** Mache das nach dem Fest.

---

## Sicherung der Bibliothek (sehr empfohlen)

Die Daten leben nur auf deinem Gerät. Wenn das iPad kaputt geht oder du Speicher löschst, sind die Artikel weg. Deshalb: **mach dir eine Sicherungsdatei**.

**So geht's:**
1. Im Tab **„Menü"** ganz nach unten scrollen, zur Box **„Sicherung"**.
2. **„Bibliothek exportieren"** tippen → es lädt eine kleine Datei `bibliothek-2026-04-12.json` herunter.
3. Diese Datei in iCloud Drive, per Mail an dich selbst, oder per AirDrop an deinen Mac sichern. **Bewahre sie auf.**

**So spielst du sie zurück** (z. B. nach „App gelöscht" oder „neues iPad"):
1. Datei wieder aufs Gerät laden (z. B. aus iCloud Drive).
2. App öffnen, Tab „Menü", **„Bibliothek importieren"** tippen, Datei auswählen.
3. Bestätigen → die Bibliothek ist wieder da.

> **Tipp:** Mach das einmal nach jeder größeren Änderung. Eine 2 KB große Datei ist dein Versicherungsschein.

---

## Was du NICHT tun solltest

- ❌ **Nicht das App-Symbol vom Home-Bildschirm löschen.** Wenn du das Symbol löschst, sind auch alle gespeicherten Artikel und Bestellungen weg. Erst die Bibliothek **exportieren**, dann erst löschen.
- ❌ **Nicht in Safari den Verlauf / die Website-Daten löschen** („Einstellungen → Safari → Verlauf und Websitedaten löschen"). Das löscht **alle** gespeicherten Artikel und Bestellungen.
- ❌ **Nicht im privaten Modus von Safari nutzen.** Im privaten Modus wird beim Schließen alles gelöscht.
- ❌ **Nicht „Tag zurücksetzen" mitten im Fest** drücken. Das löscht alle bisherigen Bestellungen des Tages. Erst nach dem Fest, idealerweise **nachdem du den CSV-Export gemacht hast**.
- ❌ **Nicht auf zwei Geräten gleichzeitig** kassieren wollen. Die Geräte synchronisieren sich nicht. Jedes Gerät hat seine eigene Kasse und seinen eigenen Tagesabschluss.
- ❌ **Nicht ein Update von iOS durchführen, ohne vorher die Bibliothek zu exportieren.** Updates sind eigentlich sicher, aber eine Sicherung schadet nie.

---

## Was du tun solltest

- ✅ **Vor jedem Fest:** App einmal kurz mit WLAN öffnen (damit eventuelle Updates gezogen werden), Bibliothek prüfen, aktives Menü zusammenstellen.
- ✅ **Nach jedem Fest:** Tab „Tag" → **CSV exportieren** → dann **Tag zurücksetzen**.
- ✅ **Regelmäßig:** Bibliothek exportieren und sichern (siehe oben).
- ✅ **Während des Festes:** App immer über das Symbol auf dem Home-Bildschirm starten — nicht über Safari.

---

## Häufige Fragen

**Brauche ich Internet während des Festes?**
Nein. Nach der einmaligen Einrichtung läuft die App komplett offline. Auch wenn das WLAN am Veranstaltungsort nicht funktioniert, geht alles weiter.

**Wo liegen meine Daten? Kann jemand sie sehen?**
Alles liegt nur auf deinem iPad/iPhone. Es wird nichts ins Internet hochgeladen. GitHub (wo die App liegt) bekommt nur den ersten Download mit, deine Verkaufszahlen niemals.

**Kann ich das auf mehreren Geräten gleichzeitig nutzen?**
Technisch ja, aber jedes Gerät hat eine eigene Kasse — die Geräte „wissen" nichts voneinander. Wenn ihr zu zweit kassiert, müsst ihr am Ende beide CSVs zusammenrechnen.

**Was passiert, wenn ich das iPad neu starte?**
Nichts. Die Daten bleiben.

**Kann ich Kartenzahlung annehmen?**
Nein. Die App kann nur Bargeld.

**Kann ich Belege drucken?**
Nein.

---

## Für Entwickler

Eine einzige `index.html` plus `sw.js` (Service Worker für Offline). Reines HTML/CSS/JavaScript. Kein Build, keine Abhängigkeiten. `// @ts-check` + JSDoc für Typprüfung im Editor. Daten in `localStorage`. CSV-Export per `Blob`-Download. Sprache: Deutsch, EUR mit `,` als Dezimaltrenner.
