# Mein Weg in den Beruf

Statische Lernwebsite für die Berufsvorbereitung im Fach Berufliche Handlungsfähigkeit. Wiederhergestellte Fassung mit 55 Aufgaben und individuellen Tipps.

## Starten

Das ZIP vollständig entpacken und `index.html` in einem Browser öffnen. Alle Dateien müssen zusammen im selben Ordner bleiben. Die Seite benötigt weder Internet noch einen Server oder eine Installation.

Alternativ enthält die zusätzlich bereitgestellte Datei `Mein-Weg-in-den-Beruf.html` die ganze Website in einer einzigen Datei. Diese kann direkt geöffnet oder weitergegeben werden. Zum Pflegen der Aufgaben ist die Version mit mehreren Dateien einfacher.

## Inhalt

- 15 Aufgaben zu Stärken und Interessen: räumliches Vorstellungsvermögen, Feinmotorik, technisches Verständnis, Merkfähigkeit, Konzentration, Kommunikation, Organisation und passende Übungsziele.
- Je 8 Aufgaben zu Berufen, Bewerbungen und Lebensläufen, Vorstellungsgesprächen, Teamarbeit und Kommunikation sowie Verhalten im Betrieb.
- Multiple Choice mit genau einer richtigen Antwort, Richtig/Falsch, Lückentexte mit Wortauswahl und praktische Entscheidungen.
- Ähnliche, glaubwürdige Antwortmöglichkeiten. Ein Detail der Situation kann entscheidend sein.
- Jede Aufgabe enthält eine aufklappbare Hilfe unter „Tipp zur Aufgabe“. Tipps kosten keine Punkte.
- Sofortige Rückmeldung und Erklärung, Fortschrittsbalken und Punkte am Ende.

Jede richtige Antwort zählt einen Punkt. Eine Aufgabe wird pro Durchgang einmal gewertet. Wiederholen beginnt bei null. Zurück zur Übersicht beendet den laufenden Durchgang. Das zuletzt abgeschlossene Ergebnis bleibt bis zum Neuladen oder Schließen sichtbar.

## Dateien und Pflege

| Datei | Inhalt |
| --- | --- |
| `index.html` | Seitenstruktur |
| `style.css` | Farben, Schrift und Darstellung |
| `script.js` | Navigation und Auswertung |
| `aufgaben.js` | Alle Fragen, Antworten, Erklärungen und Tipps |

### Eine Aufgabe ändern

1. Eine Sicherheitskopie von `aufgaben.js` anlegen.
2. Die Datei mit einem Texteditor öffnen, zum Beispiel dem Windows-Editor, nicht Word.
3. Die gewünschte Aufgabe suchen. Nur die Texte zwischen den Anführungszeichen ändern.
4. Als UTF-8 speichern, die Website neu laden und eine richtige sowie eine falsche Antwort ausprobieren.

Beispiel:

```js
{
  "typ": "Multiple Choice",
  "frage": "Was ist eine Stärke?",
  "antworten": ["Etwas, das ich gut kann.", "Etwas, das ich kaufen möchte."],
  "richtig": "Etwas, das ich gut kann.",
  "erklaerung": "Eine Stärke ist eine Fähigkeit.",
  "tipp": "Denke an etwas, das dir gut gelingt."
}
```

`richtig` muss genau einer Antwort entsprechen, einschließlich Satzzeichen. Jede Antwort darf nur einmal vorkommen. Als `typ` sind `Multiple Choice`, `Richtig / Falsch`, `Lückentext` oder `Was würdest du tun?` vorgesehen. Bei Lückentexten eine Lücke mit `___` in die Frage schreiben.

Für eine neue Aufgabe einen vollständigen Block von `{` bis `}` innerhalb der Liste `aufgaben` kopieren und anpassen. Zwischen zwei Aufgaben steht ein Komma. Klammern und Anführungszeichen beibehalten. Anzahl der Aufgaben, Fortschritt und maximale Punkte passen sich automatisch an.

Texte ohne Zeilenumbruch innerhalb der Anführungszeichen schreiben. Einfache Anführungszeichen sind im Text möglich: `"frage": "Was heißt 'Team'?"`. Keine HTML-Tags einfügen.

### Tipps ändern

Den Text im Feld `tipp` bearbeiten. Ein guter Tipp lenkt auf einen wichtigen Hinweis, ohne nur die Lösung zu nennen. Ein bis drei kurze Sätze reichen. Ist das Feld leer oder fehlt es, erscheint keine Tipp-Schaltfläche. Die Erklärung nach der Antwort bleibt unabhängig davon.

### Bereiche ein- oder ausblenden

Alle sechs Bereiche sind freigeschaltet. Im jeweiligen Bereich kann `"freigeschaltet": true` durch `"freigeschaltet": false` ersetzt werden. Dann ist er vorübergehend nicht nutzbar. Die `id` unverändert lassen, weil sie zur Navigation gehört.

Die separate Einzeldatei ist eine Kopie des aktuellen Standes. Änderungen in `aufgaben.js` ändern diese Kopie nicht. Nach Änderungen die Website mit den fünf Quelldateien nutzen und weitergeben.

## Fachliche Prüfung

Alle 55 Aufgaben sind gekennzeichnete Beispielinhalte. Die Lehrkraft prüft vor dem Unterricht richtige Antwort, Erklärung, Sprachstand und Bezug zur Klasse. Das Quiz misst Verständnis, nicht persönliche Stärken oder Berufseignung. In echten Aufgaben wirken oft mehrere Fähigkeiten zusammen. Eine einzelne Schwierigkeit belegt keine feste Schwäche. Übungsbedarf wird daher mit einem Lernweg verbunden. Sicherheitsbeispiele ersetzen keine betriebliche Unterweisung.

## Veröffentlichung über GitHub Pages

Die Website ist vorbereitet, aber noch nicht veröffentlicht. Nur die veröffentlichende Person benötigt ein GitHub-Konto.

1. Ein öffentliches Repository anlegen, zum Beispiel `mein-weg-in-den-beruf`.
2. Über **Add file → Upload files** die fünf Dateien hochladen. `index.html` muss direkt im Repository liegen. Änderungen mit **Commit changes** speichern.
3. **Settings → Pages** öffnen.
4. Unter **Build and deployment → Source** den Eintrag **Deploy from a branch** wählen.
5. Branch **main** und Ordner **/(root)** wählen, dann **Save**.
6. Nach der Bereitstellung steht die Adresse unter **Settings → Pages → Visit site**. Das kann einige Minuten dauern.
7. Die Seite auf einem echten Smartphone ausprobieren und den Link mit der Klasse teilen.

Bei späteren Änderungen die bearbeiteten Dateien im gleichen Repository ersetzen. Öffentliche Repositories können GitHub Pages im kostenlosen Tarif nutzen. Es sind keine eigenen Build-Befehle, externen Bibliotheken oder API-Schlüssel erforderlich.

Offizielle Anleitung, im ursprünglichen Erstellungsdurchlauf am 25.09.2026 geprüft:
- [GitHub-Pages-Website erstellen](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Veröffentlichungsquelle einstellen](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Daten und Bedienung

Keine Anmeldung, Abfrage persönlicher Daten, Cookies, externen Schriften oder Analysewerkzeuge. Antworten und Punkte werden nicht gesendet und nur im Arbeitsspeicher gehalten. Beim Neuladen oder Schließen werden sie zurückgesetzt. Beim Online-Aufruf erhält der Hosting-Anbieter technisch notwendige Verbindungsdaten, aber keine Aufgabenlösungen von dieser Anwendung.

Bedienung per Berührung, Maus oder Tastatur: Tab wechselt zum nächsten Element, Enter aktiviert Links und Schaltflächen. Die Leertaste aktiviert Schaltflächen und klappt Tipps auf oder zu. Fokusmarkierungen, beschrifteter Fortschritt und Text zusätzlich zu Farben sind enthalten. Kein Ton und kein Zeitlimit. Bei langen Aufgaben oder großer Schrift darf gescrollt werden.

## Prüfung

Alle sechs Bereiche mit 55 Aufgaben: richtige und falsche Antworten, volle und teilweise Punktzahl, Wiederholung, Neuladen, Tastaturbedienung und Tipps ohne Punktabzug. Bildschirmbreiten 320, 375, 390, 768 und 1440 Pixel sowie verdoppelte Basisschrift. Datensätze auf genau eine hinterlegte richtige Antwort geprüft. Kein vollständiges Barrierefreiheits-Audit; ein Test mit der Lerngruppe und auf echten Endgeräten ist sinnvoll.
