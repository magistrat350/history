# Chronika – Geschichte erzählt

Eine Web-App, die ausschließlich Geschichtswissen vermittelt: umfassende Artikel, Zeitstrahlen für Länder, Kontinente und die Welt, wiederkehrende Themen sowie Redewendungen, Zitate und Kalauer mit historischem Hintergrund („Nagel mich nicht darauf fest“ → Jesus).

## Starten

Keine Installation, kein Build-Schritt – reines HTML/CSS/JavaScript.

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

`index.html` lässt sich auch direkt per Doppelklick öffnen. Über einen Webserver ausgeliefert, funktioniert die App dank Service Worker auch offline und lässt sich auf dem Handy als App installieren.

## Funktionen

| Bereich | Inhalt |
|---|---|
| **Artikel** | 31 ausführliche Beiträge von der Neolithischen Revolution bis zum Fall der Mauer, mit Merkdaten, Inhaltsverzeichnis, „Mythos oder Wahrheit?“-Kästen und Eselsbrücken |
| **Zeitstrahlen** | Weltgeschichte, 6 Kontinente und 56 Länder (884 Ereignisse), gegliedert nach Epochen. In jedem Länder-Zeitstrahl lassen sich die Kontinental- und die Weltgeschichte einblenden |
| **⇄ Zur gleichen Zeit** | Zeigt zu jedem Ereignis, was gleichzeitig in anderen Ländern und Kontinenten passierte |
| **Wiederkehrende Themen** | 12 Muster der Geschichte (Imperien, Revolutionen, Seuchen, Glaube & Macht …), jeweils über alle Zeitstrahlen hinweg verfolgbar |
| **Gesprächsstoff** | 72 Geschichtsreferenzen für den Alltag: in welcher Situation, was man sagt und die Geschichte dahinter – mit Kopier-Knopf und Zufallsspruch |
| **Fakten** | 91 überraschende Fakten: zeitliche Perspektive, Mythen, Kurioses, Ursprung des Alltags, Menschen |
| **Redewendungen** | 137 Einträge: Redewendungen, geflügelte Worte, Kalauer, Wortgeschichten und Eselsbrücken – direkt in Artikeln und Zeitstrahlen verlinkt |
| **Suche** | Volltextsuche über alles, auch nach Jahreszahlen (z. B. „1648“) |

Dazu: Hell- und Dunkelmodus und ein Layout für Desktop und Handy.

## Android-App & Updates über GitHub

Bei jedem Push baut GitHub Actions (`.github/workflows/build.yml`) automatisch eine Android-APK.
Auf dem Standard-Branch wird sie als **GitHub-Release** veröffentlicht (Version `1.<Laufnummer>`).

- **Installieren:** https://github.com/magistrat350/history/releases/latest/download/chronika.apk auf dem Handy öffnen und installieren (einmalig „Installation aus unbekannten Quellen“ erlauben).
- **Aktualisieren:** Inhalte ändern → committen → pushen. Die installierte App prüft beim Start (höchstens alle 12 Stunden) die neueste Release-Version und zeigt oben einen Hinweis mit Download-Link. Manuell: Fußzeile → „Über die App & Updates“.
- **Web-Version:** Wird zusätzlich auf GitHub Pages veröffentlicht, sobald unter *Settings → Pages* die Quelle „GitHub Actions“ gewählt ist.

**Signaturschlüssel:** Damit Updates über die installierte App drüberinstalliert werden können, muss jede APK mit demselben Schlüssel signiert sein. Dafür liegt `signing/chronika.jks` im Repository. Da das Repository öffentlich ist, kann diesen Schlüssel jeder lesen. Sicherer ist ein eigener Schlüssel als Repository-Secret: `ANDROID_KEYSTORE_BASE64` (Keystore als Base64, Alias `chronika`) und `ANDROID_KEYSTORE_PASSWORD`. Der Workflow nutzt die Secrets automatisch, wenn sie gesetzt sind. Achtung: Ein Schlüsselwechsel erfordert eine einmalige Neuinstallation der App.

Lokal (mit installiertem Android-SDK):

```bash
npm install
APP_VERSION=1.0 npm run build:web
npx cap add android && npm run android:icons && npx cap sync android
cd android && ./gradlew assembleDebug
```

## Inhalte erweitern

Alle Inhalte liegen in `data/` als einfache JavaScript-Objekte:

- `themes.js` – wiederkehrende Themen
- `idioms.js`, `idioms-2.js` – Redewendungen (`kind`: `redewendung`, `zitat`, `kalauer`, `wort`, `merkspruch`)
- `talk.js` – Gesprächsstoff (`when` = Situation, `say` = was man sagt, `story` = Hintergrund, `cat`: `buero`, `alltag`, `konter`, `prognose`, `politik`)
- `facts.js` – Fakten (`cat`: `perspektive`, `mythos`, `kurios`, `alltag`, `menschen`)
- `articles-*.js` – Artikel
- `world.js` – Welt- und Kontinent-Zeitstrahlen
- `countries-*.js` – Länder-Zeitstrahlen

Ein neues Land hinzufügen:

```js
window.HG.countries.push({
  id: 'xx', name: 'Land', flag: '🏳️', cont: 'europa',
  intro: 'Kurze Einleitung …',
  facts: ['Hauptstadt: …'],
  events: [
    { y: 1848, t: 'Titel', d: 'Beschreibung', th: ['revolution'], a: 'artikel-id', r: 'redewendung-id' }
  ]
});
```

Jahre vor Christus sind negativ (`y: -44`). Optional: `end` (Endjahr), `approx: true` („um …“) oder `yd` (eigener Anzeigetext).

In Texten verlinkt folgendes Markup automatisch:

- `[[a:rom|Römisches Reich]]` – Artikel
- `[[l:de|Deutschland]]` – Länder-Zeitstrahl
- `[[t:seuchen|Seuchen]]` – Thema
- `{{r:nagel}}` – Redewendungs-Chip
- `**fett**`

Nach Änderungen prüft dieser Befehl alle Querverweise:

```bash
node tools/check-data.js
```
