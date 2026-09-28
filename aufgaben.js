// AUFGABEN BEARBEITEN: Hier stehen alle Texte, Antworten und Erklärungen.
// Bei "richtig" die richtige Antwort genau so wie in "antworten" eintragen.
// Jede Aufgabe hat genau eine richtige Antwort. Keine persönlichen Daten eintragen.
// Alle Inhalte sind Beispiele: vor dem Unterricht fachlich und sprachlich prüfen.
// "tipp" gibt eine kleine Hilfe, ohne Punkte abzuziehen.
const LERNBEREICHE = [
  {
    "id": "staerken",
    "titel": "Meine Stärken und Interessen",
    "symbol": "☆",
    "beschreibung": "Entdecke, was du gut kannst und was dir Spaß macht.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Welche Aussage beschreibt eine Fähigkeit mit einem passenden Beispiel?",
        "antworten": [
          "Ich arbeite sorgfältig. In meinen Listen fehlen selten Angaben.",
          "Ich bin handwerklich geschickt. Ich sehe gern Videos über Werkzeuge.",
          "Ich kann gut organisieren. Ich wünsche mir einen aufgeräumten Arbeitsplatz."
        ],
        "richtig": "Ich arbeite sorgfältig. In meinen Listen fehlen selten Angaben.",
        "erklaerung": "Die erste Aussage nennt eine Fähigkeit und zeigt sie an einer Tätigkeit. Videos ansehen beschreibt eher ein Interesse. Ein Wunsch zeigt noch keine Fähigkeit.",
        "tipp": "Suche nach etwas, das die Person schon tut und das ihr gelingt."
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "Wenn mir eine Aufgabe beim ersten Versuch nicht gelingt, ist sie eine feste Schwäche von mir.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Falsch",
        "erklaerung": "Ein einzelner Versuch reicht dafür nicht. Vielleicht fehlen dir Übung, eine verständliche Erklärung oder Ruhe. Fähigkeiten können sich entwickeln.",
        "tipp": "Überlege, was außer einer Fähigkeit noch beeinflussen kann, ob eine Aufgabe gelingt."
      },
      {
        "typ": "Lückentext",
        "frage": "Lina erklärt einen Arbeitsablauf in kurzen Sätzen. Auf Nachfragen geht sie ein. Das zeigt besonders ihre ___.",
        "antworten": [
          "Merkfähigkeit",
          "Ausdauer",
          "Kommunikationsfähigkeit"
        ],
        "richtig": "Kommunikationsfähigkeit",
        "erklaerung": "Kommunikationsfähigkeit bedeutet hier: verständlich erklären und auf andere eingehen. Merkfähigkeit betrifft das Behalten von Informationen. Ausdauer heißt, länger dranzubleiben.",
        "tipp": "Achte darauf, wie Lina mit anderen spricht. Nicht darauf, wie lange sie arbeitet."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du möchtest herausfinden, ob sorgfältiges Arbeiten eine Stärke von dir ist. Welcher Weg liefert die besten Hinweise?",
        "antworten": [
          "Ich nehme die Einschätzung eines Freundes als Ergebnis.",
          "Ich prüfe bei mehreren Aufgaben meine Genauigkeit und hole Rückmeldung ein.",
          "Ich nehme das Ergebnis einer einzigen leichten Aufgabe als Ergebnis."
        ],
        "richtig": "Ich prüfe bei mehreren Aufgaben meine Genauigkeit und hole Rückmeldung ein.",
        "erklaerung": "Mehrere Aufgaben und konkrete Rückmeldungen geben bessere Hinweise als ein einzelner Versuch oder nur eine Meinung.",
        "tipp": "Welche Möglichkeit zeigt dir deine Arbeit in verschiedenen Situationen?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Aussage beschreibt vor allem ein Interesse und noch keine nachgewiesene Fähigkeit?",
        "antworten": [
          "Ich beschäftige mich in meiner Freizeit gern mit Pflanzen.",
          "Ich erkenne häufige Pflanzenarten zuverlässig an ihren Blättern.",
          "Ich messe die Wassermenge für Pflanzen meist genau ab."
        ],
        "richtig": "Ich beschäftige mich in meiner Freizeit gern mit Pflanzen.",
        "erklaerung": "Sich gern mit Pflanzen zu beschäftigen ist ein Interesse. Arten zu erkennen und genau zu messen beschreiben Fähigkeiten.",
        "tipp": "Achte auf den Unterschied zwischen „gern machen“ und „gut können“."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Ich kann mir vorstellen, wie ein Körper von hinten aussieht. Ich drehe ihn dafür im Kopf. Welche Fähigkeit passt am besten?",
        "antworten": [
          "Merkfähigkeit",
          "Rechenfähigkeit",
          "Räumliches Vorstellungsvermögen"
        ],
        "richtig": "Räumliches Vorstellungsvermögen",
        "erklaerung": "Räumliches Vorstellungsvermögen heißt: Du kannst dir Formen und ihre Lage im dreidimensionalen Raum vorstellen. Es geht um Länge, Breite und Höhe. Rechnen und Merken sind andere Fähigkeiten.",
        "tipp": "Du musst hier weder Zahlen berechnen noch einen Text behalten. Was passiert mit der Form in deinem Kopf?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Bei welcher Aufgabe ist räumliches Vorstellungsvermögen besonders wichtig?",
        "antworten": [
          "Ich vergleiche die Preise von drei Regalen.",
          "Ich stelle mir vor, ob ein gedrehtes Regal durch eine Tür passt.",
          "Ich merke mir die Namen von drei Regalmodellen."
        ],
        "richtig": "Ich stelle mir vor, ob ein gedrehtes Regal durch eine Tür passt.",
        "erklaerung": "Beim gedanklichen Drehen stellst du dir Form und Lage des Regals vor. Preisvergleich braucht eher Rechenfähigkeit, Namen behalten eher Merkfähigkeit. In der Praxis muss man Maße zusätzlich prüfen.",
        "tipp": "Suche die Aufgabe, bei der du dir die Lage eines Gegenstands vorstellen musst."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Ich setze kleine Teile mit meinen Fingern genau zusammen. Welche Fähigkeit zeigt sich dabei besonders?",
        "antworten": [
          "Feinmotorik",
          "Räumliches Vorstellungsvermögen",
          "Sprachliche Ausdrucksfähigkeit"
        ],
        "richtig": "Feinmotorik",
        "erklaerung": "Feinmotorik bedeutet, kleine Bewegungen mit Händen und Fingern genau zu steuern. Sich Formen vorzustellen kann zusätzlich helfen, ist aber nicht dasselbe.",
        "tipp": "Achte auf die genaue Bewegung der Finger. Geht es vor allem um Bewegung, Vorstellung oder Sprache?"
      },
      {
        "typ": "Lückentext",
        "frage": "Ich erkenne, welche Teile eines Geräts zusammenarbeiten und warum es sich bewegt. Das zeigt mein ___.",
        "antworten": [
          "räumliches Vorstellungsvermögen",
          "technisches Verständnis",
          "Organisationstalent"
        ],
        "richtig": "technisches Verständnis",
        "erklaerung": "Technisches Verständnis hilft, Funktionen und Zusammenhänge eines Geräts zu verstehen. Räumliches Denken betrifft eher Formen und ihre Lage. Organisieren betrifft das Planen von Aufgaben.",
        "tipp": "Hier geht es um das Warum einer Bewegung, nicht nur um die Form der Teile."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Ich merke mir neue Begriffe und kann sie am nächsten Tag wieder nennen. Welche Stärke zeigt das besonders?",
        "antworten": [
          "Konzentrationsfähigkeit",
          "Kommunikationsfähigkeit",
          "Merkfähigkeit"
        ],
        "richtig": "Merkfähigkeit",
        "erklaerung": "Merkfähigkeit bedeutet, Informationen zu behalten und später wieder abzurufen. Konzentration hilft beim Lernen, beschreibt aber das gerichtete Aufpassen.",
        "tipp": "Achte auf den Zeitpunkt: Die Informationen sind am nächsten Tag noch da."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Ich vergleiche längere Zeit zwei ähnliche Listen. Ich bleibe bei der Aufgabe und bemerke kleine Unterschiede. Welche Stärke zeigt sich besonders?",
        "antworten": [
          "Konzentrationsfähigkeit",
          "Körperliche Belastbarkeit",
          "Räumliches Vorstellungsvermögen"
        ],
        "richtig": "Konzentrationsfähigkeit",
        "erklaerung": "Konzentrationsfähigkeit hilft, die Aufmerksamkeit bei einer Aufgabe zu halten. Hier geht es um genaues Vergleichen, nicht um körperliche Kraft oder Formen im Raum.",
        "tipp": "Welche Fähigkeit brauchst du, um deine Aufmerksamkeit bei kleinen Details zu halten?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du merkst dir gesprochene Aufträge gut. Bei längeren schriftlichen Anleitungen übersiehst du öfter Schritte. Welche Einschätzung passt?",
        "antworten": [
          "Meine Merkfähigkeit ist schwach. Schriftliche Anleitungen lasse ich weg.",
          "Meine Merkfähigkeit hilft mir. Das genaue Lesen kann ich mit markierten Schritten üben.",
          "Mein räumliches Denken ist schwach. Ich muss vor allem Formen üben."
        ],
        "richtig": "Meine Merkfähigkeit hilft mir. Das genaue Lesen kann ich mit markierten Schritten üben.",
        "erklaerung": "Hier zeigen sich eine Stärke und ein möglicher Übungsbedarf. Schritte markieren und abhaken kann helfen. Aus der Situation folgt nichts über räumliches Denken.",
        "tipp": "Trenne: Was gelingt schon? Bei welchem Teil der Aufgabe entstehen die Schwierigkeiten?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du kannst dir einen Bauplan gut im Kopf vorstellen. Beim Zusammenbauen kleiner Teile rutscht dir oft etwas weg. Was passt am besten?",
        "antworten": [
          "Mein räumliches Denken hilft mir. Beim Greifen sollte ich vor allem das Merken von Begriffen üben.",
          "Meine Feinmotorik ist stark. Nur das Vorstellen von Formen fällt mir schwer.",
          "Mein räumliches Denken hilft mir. Genaues Greifen und Zusammenbauen kann ich üben."
        ],
        "richtig": "Mein räumliches Denken hilft mir. Genaues Greifen und Zusammenbauen kann ich üben.",
        "erklaerung": "Formen vorstellen und kleine Teile bewegen sind verschiedene Fähigkeiten. Die Situation zeigt räumliches Denken als Stärke und einen möglichen Übungsbedarf bei der Feinmotorik.",
        "tipp": "Unterscheide die Vorstellung im Kopf von der Bewegung mit den Fingern."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Ich teile eine Gruppenaufgabe in Schritte ein. Ich plane die Reihenfolge und die benötigte Zeit. Welche Stärke passt am besten?",
        "antworten": [
          "Organisationstalent",
          "Merkfähigkeit",
          "Feinmotorik"
        ],
        "richtig": "Organisationstalent",
        "erklaerung": "Organisationstalent zeigt sich beim Planen und Ordnen von Abläufen. Ein Plan darf auch aufgeschrieben sein: Man muss ihn nicht auswendig behalten.",
        "tipp": "Welche Fähigkeit verbindet Reihenfolge, Zeit und einzelne Arbeitsschritte?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du verrechnest dich öfter beim Wechselgeld. Du möchtest sicherer werden. Welches Lernziel ist konkret und überprüfbar?",
        "antworten": [
          "Ich will ab morgen einfach besser mit Zahlen sein.",
          "Ich übe täglich fünf Wechselgeld-Aufgaben und prüfe meine Ergebnisse.",
          "Ich übe nur Aufgaben, die ich bereits ohne Fehler kann."
        ],
        "richtig": "Ich übe täglich fünf Wechselgeld-Aufgaben und prüfe meine Ergebnisse.",
        "erklaerung": "Das zweite Ziel sagt, was du übst und wie du das Ergebnis prüfst. Rechnen kann hier ein Lernfeld sein. Es ist keine feste Aussage darüber, was du später können wirst.",
        "tipp": "Ein gutes Lernziel nennt eine Tätigkeit und eine Möglichkeit, den Fortschritt zu prüfen."
      }
    ]
  },
  {
    "id": "berufe",
    "titel": "Berufe kennenlernen",
    "symbol": "⌕",
    "beschreibung": "Lerne Berufe und ihre Aufgaben kennen.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Welche Tätigkeit gehört besonders zur Herstellung von Backwaren?",
        "antworten": [
          "Backwaren für den Verkauf verpacken.",
          "Teig nach Rezept herstellen und backen.",
          "Kunden über das Sortiment beraten."
        ],
        "richtig": "Teig nach Rezept herstellen und backen.",
        "erklaerung": "Teig herstellen und backen gehört zur Produktion. Verpacken und Beraten gehören eher zum Verkauf. Je nach Betrieb können Tätigkeiten zusammenkommen.",
        "tipp": "Die Frage sucht die Herstellung. Achte auf den Unterschied zwischen Produzieren und Verkaufen."
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "Zwei Praktika im gleichen Beruf können unterschiedliche Einblicke geben, weil Betriebe verschiedene Aufgaben verteilen.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Richtig",
        "erklaerung": "Auch im gleichen Beruf können sich Produkte, Abläufe und Aufgaben unterscheiden. Vergleiche deshalb deine Erfahrungen und frage nach weiteren typischen Tätigkeiten.",
        "tipp": "Denke an zwei Geschäfte: Müssen Sortiment und tägliche Aufgaben dort genau gleich sein?"
      },
      {
        "typ": "Lückentext",
        "frage": "Ein Beruf interessiert mich. Um den Arbeitsalltag einzuschätzen, prüfe ich besonders die typischen ___.",
        "antworten": [
          "Werbebilder",
          "Berufsbezeichnungen",
          "Tätigkeiten"
        ],
        "richtig": "Tätigkeiten",
        "erklaerung": "Tätigkeiten zeigen, was du tatsächlich tust. Bilder und Namen können einen Eindruck geben, beschreiben aber nicht den ganzen Arbeitsalltag.",
        "tipp": "Welche Information beschreibt das konkrete Tun?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du möchtest wissen, ob Verkauf zu dir passt. Was liefert die besten Hinweise?",
        "antworten": [
          "Ich beobachte verschiedene Aufgaben im Praktikum und bespreche meine Erfahrungen.",
          "Ich vergleiche nur die Schaufenster von mehreren Geschäften.",
          "Ich frage nur, ob meine Freunde die Arbeit im Verkauf mögen."
        ],
        "richtig": "Ich beobachte verschiedene Aufgaben im Praktikum und bespreche meine Erfahrungen.",
        "erklaerung": "Eigene Erfahrungen mit mehreren Aufgaben zeigen dir mehr als die Außendarstellung oder die Interessen anderer.",
        "tipp": "Suche einen Weg, bei dem du den Arbeitsalltag und deine eigene Reaktion darauf kennenlernst."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Frage hilft besonders, die Arbeitsbedingungen eines Berufs kennenzulernen?",
        "antworten": [
          "Welche Produkte stellt der Betrieb für seine Kunden her?",
          "Welche Arbeitszeiten und körperlichen Anforderungen gibt es?",
          "Welche Standorte hat der Betrieb in Deutschland?"
        ],
        "richtig": "Welche Arbeitszeiten und körperlichen Anforderungen gibt es?",
        "erklaerung": "Alle Fragen geben Informationen über den Betrieb. Arbeitszeiten und körperliche Anforderungen beschreiben aber besonders die Bedingungen deiner täglichen Arbeit.",
        "tipp": "Arbeitsbedingungen beschreiben, unter welchen Umständen du arbeitest."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du magst die Produkte eines Geschäfts. Du bist aber unsicher, ob dir die Arbeit dort gefällt. Was solltest du als Nächstes klären?",
        "antworten": [
          "Ob das Geschäft die Produkte auch online verkauft.",
          "Ob es für Mitarbeitende Rabatte auf Produkte gibt.",
          "Welche Aufgaben Beschäftigte dort täglich übernehmen."
        ],
        "richtig": "Welche Aufgaben Beschäftigte dort täglich übernehmen.",
        "erklaerung": "Produkte mögen und die tägliche Arbeit mögen ist nicht dasselbe. Lerne die Tätigkeiten kennen, bevor du entscheidest.",
        "tipp": "Denke an deine Rolle als arbeitende Person, nicht als Kunde oder Kundin."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Du suchst Informationen über die Ausbildung in einem bestimmten Betrieb. Welche Quelle ist dafür am direktesten?",
        "antworten": [
          "Die aktuelle Ausbildungsanzeige des Betriebs und seine Ansprechperson.",
          "Ein älterer Erfahrungsbericht über einen anderen Betrieb.",
          "Eine allgemeine Werbeanzeige für die Produkte des Betriebs."
        ],
        "richtig": "Die aktuelle Ausbildungsanzeige des Betriebs und seine Ansprechperson.",
        "erklaerung": "Die aktuelle Anzeige und die Ansprechperson können Auskunft zu diesem Ausbildungsplatz geben. Allgemeine oder ältere Informationen können davon abweichen.",
        "tipp": "Achte darauf, ob die Information aktuell ist und genau diesen Ausbildungsplatz betrifft."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du stellst dir Formen gut im Kopf vor. Du interessierst dich für die Arbeit mit Holz. Welche Schlussfolgerung passt?",
        "antworten": [
          "Damit weiß ich schon, dass alle Aufgaben dieses Berufs zu mir passen.",
          "Ich prüfe im Praktikum, wie meine Fähigkeit bei echten Aufgaben hilft.",
          "Damit brauche ich praktische Handgriffe nicht mehr zu üben."
        ],
        "richtig": "Ich prüfe im Praktikum, wie meine Fähigkeit bei echten Aufgaben hilft.",
        "erklaerung": "Räumliches Denken kann bei Aufgaben mit Formen und Plänen helfen. Ob ein Beruf passt, hängt aber auch von weiteren Aufgaben, Interessen und Bedingungen ab.",
        "tipp": "Eine Stärke ist ein Hinweis. Überlege, welche Erfahrungen dir noch fehlen."
      }
    ]
  },
  {
    "id": "bewerbung",
    "titel": "Bewerbungen und Lebensläufe",
    "symbol": "▤",
    "beschreibung": "Zeige, was du kannst und was du lernen möchtest.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Welche Angabe zeigt praktische Erfahrung im Lebenslauf am deutlichsten?",
        "antworten": [
          "Ich kenne mehrere Menschen, die im Verkauf arbeiten.",
          "Ich finde die Arbeit im Verkauf schon lange interessant.",
          "Praktikum im Verkauf, Mai 2026: Waren eingeräumt und Preise geprüft."
        ],
        "richtig": "Praktikum im Verkauf, Mai 2026: Waren eingeräumt und Preise geprüft.",
        "erklaerung": "Die dritte Angabe nennt eine echte Station, einen Zeitraum und Tätigkeiten. Interesse und Kontakte sind keine eigene praktische Erfahrung.",
        "tipp": "Suche nach einer Tätigkeit, die die Person selbst ausgeführt hat."
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "Eine Tätigkeit, die ich im Praktikum nur beobachtet habe, kann ich im Lebenslauf als selbst ausgeführte Aufgabe nennen.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Falsch",
        "erklaerung": "Beobachten und selbst ausführen sind verschieden. Schreibe wahrheitsgemäß zum Beispiel: Einblicke in die Warenbestellung erhalten.",
        "tipp": "Überlege, welchen Eindruck „selbst ausgeführt“ beim Lesen erzeugt."
      },
      {
        "typ": "Lückentext",
        "frage": "Eine überzeugende Aussage über meine Stärke ergänze ich durch ein ___.",
        "antworten": [
          "Beispiel",
          "Fachwort",
          "Versprechen"
        ],
        "richtig": "Beispiel",
        "erklaerung": "Ein echtes Beispiel macht die Stärke nachvollziehbar. Ein schwieriges Wort oder ein Versprechen belegt sie noch nicht.",
        "tipp": "Was zeigt, dass du die Fähigkeit schon einmal eingesetzt hast?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Die Anzeige verlangt eine Bewerbung als PDF per E-Mail. Welche Vorbereitung ist am sinnvollsten?",
        "antworten": [
          "Ich prüfe die Gestaltung und sende die PDF ohne Kontrolle an meine gespeicherte Kontaktadresse.",
          "Ich prüfe Empfänger, Unterlagen und ob sich die PDF-Dateien öffnen lassen.",
          "Ich prüfe die E-Mail-Adresse und sende die Unterlagen als Handyfotos im Anhang."
        ],
        "richtig": "Ich prüfe Empfänger, Unterlagen und ob sich die PDF-Dateien öffnen lassen.",
        "erklaerung": "So prüfst du, ob die Bewerbung am richtigen Ort ankommt und gelesen werden kann. Beachte auch die Angaben in der Anzeige.",
        "tipp": "Denke an den Empfang: richtige Adresse, vollständiger Inhalt und lesbare Dateien."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Der Betrieb bietet mehrere Praktika an. Welcher Betreff ist am eindeutigsten?",
        "antworten": [
          "Meine Unterlagen für Ihren Betrieb",
          "Bewerbung um eine mögliche Tätigkeit",
          "Bewerbung um ein Praktikum im Verkauf ab November"
        ],
        "richtig": "Bewerbung um ein Praktikum im Verkauf ab November",
        "erklaerung": "Der Betreff nennt die Art des Praktikums, den Bereich und den Beginn. Das erleichtert die Zuordnung.",
        "tipp": "Welche Überschrift unterscheidet diese Bewerbung von anderen Bewerbungen?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du hast eine Vorlage für eine Bewerbung. Was passt du vor dem Senden besonders an?",
        "antworten": [
          "Betrieb, Stelle, Anrede und die passenden eigenen Erfahrungen.",
          "Nur Schriftart und Farbe, damit die Vorlage anders aussieht.",
          "Nur das Datum, weil der übrige Text für alle Stellen passt."
        ],
        "richtig": "Betrieb, Stelle, Anrede und die passenden eigenen Erfahrungen.",
        "erklaerung": "Eine Bewerbung soll zur konkreten Stelle passen und deine echten Erfahrungen nennen. Gestaltung allein reicht dafür nicht.",
        "tipp": "Welche Angaben ändern den Inhalt und den Bezug zur Stelle?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Du hast noch kein Betriebspraktikum gemacht. Welche Angabe ist ehrlich und trotzdem hilfreich?",
        "antworten": [
          "Ein erfundenes Praktikum mit Tätigkeiten, die ich mir zutraue.",
          "Ein Schulprojekt mit meinen Aufgaben und dem Zeitraum.",
          "Eine Berufserfahrung meiner Schwester ohne ihren Namen."
        ],
        "richtig": "Ein Schulprojekt mit meinen Aufgaben und dem Zeitraum.",
        "erklaerung": "Auch ein Schulprojekt kann eigene Fähigkeiten zeigen. Benenne klar, dass es ein Schulprojekt war, und beschreibe deine tatsächlichen Aufgaben.",
        "tipp": "Suche eine Erfahrung, die wirklich deine eigene ist."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Die Anzeige nennt die Kennziffer V-12. Der Betrieb soll deine E-Mail schon vor dem Öffnen der Anhänge zuordnen können. Wo hilft die Kennziffer dafür am meisten?",
        "antworten": [
          "Nur im letzten Absatz des angehängten Anschreibens.",
          "Nur in der Fußzeile des angehängten Lebenslaufs.",
          "Im Betreff, zusammen mit der Stelle, auf die ich mich bewerbe."
        ],
        "richtig": "Im Betreff, zusammen mit der Stelle, auf die ich mich bewerbe.",
        "erklaerung": "Die Kennziffer hilft, die Bewerbung der richtigen Stelle zuzuordnen. Im Betreff ist sie sofort erkennbar.",
        "tipp": "Die Kennziffer soll schon beim Eingang der Bewerbung die Zuordnung erleichtern."
      }
    ]
  },
  {
    "id": "gespraech",
    "titel": "Vorstellungsgespräche",
    "symbol": "☏",
    "beschreibung": "Bereite dich vor und übe gute Antworten.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Welche Vorbereitung hilft besonders auf die Frage „Warum möchten Sie zu uns?“?",
        "antworten": [
          "Ich verbinde Informationen über den Betrieb mit meinen eigenen Interessen.",
          "Ich lerne den Werbespruch des Betriebs ohne weitere Informationen auswendig.",
          "Ich merke mir die Antworten eines Freundes für einen anderen Betrieb."
        ],
        "richtig": "Ich verbinde Informationen über den Betrieb mit meinen eigenen Interessen.",
        "erklaerung": "So kannst du einen persönlichen und passenden Grund nennen. Auswendig gelernte fremde Antworten erklären dein Interesse nicht.",
        "tipp": "Die Frage verbindet diesen Betrieb mit deiner eigenen Motivation."
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "Wenn ich nur einen Teil der Frage verstanden habe, kann ich diesen kurz wiedergeben und zum Rest nachfragen.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Richtig",
        "erklaerung": "Damit zeigst du, was du verstanden hast, und klärst den fehlenden Teil. Anschließend kannst du passend antworten.",
        "tipp": "Überlege, wie beide Gesprächspartner prüfen können, ob sie dasselbe meinen."
      },
      {
        "typ": "Lückentext",
        "frage": "Wenn ich eine Stärke nenne, mache ich sie mit einer konkreten ___ verständlich.",
        "antworten": [
          "Vermutung",
          "Situation",
          "Absicht"
        ],
        "richtig": "Situation",
        "erklaerung": "Eine echte Situation zeigt, wie du die Stärke eingesetzt hast. Eine Vermutung oder Absicht sagt noch nicht, was dir bereits gelingt.",
        "tipp": "Denke an etwas, das du tatsächlich erlebt und getan hast."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Dein Bus fällt aus. Du kommst voraussichtlich 15 Minuten zu spät. Welche Nachricht hilft dem Betrieb am meisten?",
        "antworten": [
          "Ich komme später. Den Grund erkläre ich nach dem Gespräch.",
          "Ich warte erst ab, ob ich einen anderen Bus finde, und melde mich bei der Ankunft.",
          "Mein Bus ist ausgefallen. Ich komme etwa 15 Minuten später. Passt der Termin noch?"
        ],
        "richtig": "Mein Bus ist ausgefallen. Ich komme etwa 15 Minuten später. Passt der Termin noch?",
        "erklaerung": "Die Nachricht nennt frühzeitig den Grund, die erwartete Verspätung und fragt nach dem weiteren Vorgehen. So kann der Betrieb planen.",
        "tipp": "Welche Nachricht gibt dem Betrieb genug Informationen, um zu reagieren?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Antwort auf „Was möchten Sie noch verbessern?“ ist konkret und zeigt einen Lernweg?",
        "antworten": [
          "Bei langen Anleitungen übersehe ich manchmal Schritte. Ich übe, sie zu markieren und abzuhaken.",
          "Ich möchte irgendwann in allen Bereichen möglichst gut werden.",
          "Ich nenne lieber eine Stärke und lasse die Frage nach dem Lernen offen."
        ],
        "richtig": "Bei langen Anleitungen übersehe ich manchmal Schritte. Ich übe, sie zu markieren und abzuhaken.",
        "erklaerung": "Die erste Antwort nennt eine echte Schwierigkeit und eine passende Strategie. Das zeigt, wie du daran arbeitest.",
        "tipp": "Suche eine Antwort mit zwei Teilen: Schwierigkeit und konkreter nächster Schritt."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Am Ende darfst du Fragen stellen. Du möchtest die Einarbeitung verstehen. Welche Frage passt am besten?",
        "antworten": [
          "Welche Produkte werden bei Ihnen am häufigsten nachgefragt?",
          "Wer erklärt mir zu Beginn die Aufgaben und begleitet mich dabei?",
          "Wie viele Menschen arbeiten insgesamt in Ihrem Betrieb?"
        ],
        "richtig": "Wer erklärt mir zu Beginn die Aufgaben und begleitet mich dabei?",
        "erklaerung": "Die Frage klärt, wie du am Anfang unterstützt wirst. Sie betrifft direkt deinen Einstieg in die Arbeit.",
        "tipp": "Einarbeitung heißt: Du lernst die Aufgaben und Abläufe am Anfang kennen."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Du wirst nach einer Fähigkeit gefragt, die du noch wenig geübt hast. Welche Antwort ist glaubwürdig?",
        "antworten": [
          "Das beherrsche ich sicher, weil ich einmal davon gehört habe.",
          "Das kann ich vermutlich schon so gut wie erfahrene Beschäftigte.",
          "Das habe ich bisher wenig geübt. Ich möchte es lernen und brauche anfangs Anleitung."
        ],
        "richtig": "Das habe ich bisher wenig geübt. Ich möchte es lernen und brauche anfangs Anleitung.",
        "erklaerung": "Die dritte Antwort beschreibt deinen Stand ehrlich und nennt, welche Unterstützung beim Lernen hilft.",
        "tipp": "Welche Antwort trennt vorhandene Erfahrung von Lernbereitschaft?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du möchtest „räumliches Denken“ als Stärke nennen. Welches Beispiel passt dazu?",
        "antworten": [
          "Beim Modellbau stelle ich mir vor, wie gedrehte Teile zusammenpassen.",
          "Beim Modellbau merke ich mir die Namen aller Teile.",
          "Beim Modellbau erkläre ich anderen ruhig die Arbeitsschritte."
        ],
        "richtig": "Beim Modellbau stelle ich mir vor, wie gedrehte Teile zusammenpassen.",
        "erklaerung": "Teile im Kopf drehen und zusammenfügen zeigt räumliches Denken. Namen behalten zeigt eher Merkfähigkeit, Erklären eher Kommunikationsfähigkeit.",
        "tipp": "Suche eine Situation mit Formen und ihrer Lage im Raum."
      }
    ]
  },
  {
    "id": "team",
    "titel": "Teamarbeit und Kommunikation",
    "symbol": "↔",
    "beschreibung": "Höre zu, sprich klar und arbeite mit anderen.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Eine Kollegin erklärt einen Auftrag. Wie prüfst du am besten, ob du sie richtig verstanden hast?",
        "antworten": [
          "Ich nicke nach jedem Satz, auch wenn ein Teil unklar bleibt.",
          "Ich sage den Auftrag kurz mit eigenen Worten und frage bei Unklarheiten nach.",
          "Ich wiederhole nur das letzte Wort und beginne dann."
        ],
        "richtig": "Ich sage den Auftrag kurz mit eigenen Worten und frage bei Unklarheiten nach.",
        "erklaerung": "Mit eigenen Worten wiedergeben zeigt, wie du den Auftrag verstanden hast. Unklarheiten können dabei direkt geklärt werden.",
        "tipp": "Welche Handlung macht dein Verständnis für die andere Person erkennbar?"
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "In einem Team ist jede Aufgabe klar verteilt, sobald alle sagen: Wir helfen mit.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Falsch",
        "erklaerung": "Hilfsbereitschaft allein klärt noch nicht, wer was bis wann macht. Diese Absprachen braucht das Team zusätzlich.",
        "tipp": "Wissen nach diesem Satz alle genau, welche Aufgabe sie übernehmen?"
      },
      {
        "typ": "Lückentext",
        "frage": "Eine sachliche Rückmeldung bezieht sich zuerst auf eine konkrete ___.",
        "antworten": [
          "Vermutung",
          "Personenbewertung",
          "Beobachtung"
        ],
        "richtig": "Beobachtung",
        "erklaerung": "Eine Beobachtung beschreibt, was tatsächlich passiert ist. Sie lässt sich besprechen, ohne die ganze Person zu bewerten.",
        "tipp": "Was kann die andere Person an der Arbeit selbst nachvollziehen?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Zwei Vorschläge für eine Gruppenaufgabe sind unterschiedlich. Wie trefft ihr eine begründete Entscheidung?",
        "antworten": [
          "Wir vergleichen beide Vorschläge mit Ziel, Zeit und Material.",
          "Wir nehmen den Vorschlag der Person, die zuerst gesprochen hat.",
          "Wir wechseln ohne Absprache zwischen beiden Vorschlägen."
        ],
        "richtig": "Wir vergleichen beide Vorschläge mit Ziel, Zeit und Material.",
        "erklaerung": "Gemeinsame Kriterien helfen, die Vorschläge zu prüfen. So geht es um die Aufgabe statt darum, wer zuerst oder am lautesten spricht.",
        "tipp": "Welche Entscheidung könnt ihr mit den Anforderungen der Aufgabe erklären?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Rückmeldung hilft bei einer unvollständigen Liste am meisten?",
        "antworten": [
          "Du musst deine Listen grundsätzlich etwas besser machen.",
          "In Zeile 4 fehlt die Menge. Bitte ergänze sie vor der Abgabe.",
          "Du arbeitest offenbar weniger sorgfältig als die anderen."
        ],
        "richtig": "In Zeile 4 fehlt die Menge. Bitte ergänze sie vor der Abgabe.",
        "erklaerung": "Die zweite Rückmeldung nennt die genaue Stelle und die nötige Änderung. Die anderen Aussagen sind zu ungenau oder bewerten die Person.",
        "tipp": "Welche Aussage macht sofort klar, was als Nächstes zu tun ist?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Dein Teil einer Gruppenaufgabe dauert länger als geplant. Andere brauchen dein Ergebnis. Was hilft dem Team am meisten?",
        "antworten": [
          "Ich arbeite still weiter und erkläre die Verzögerung erst am Ende.",
          "Ich gebe meinen Teil ohne Erklärung an die nächste Person weiter.",
          "Ich melde die Verzögerung früh und bespreche Hilfe oder einen neuen Ablauf."
        ],
        "richtig": "Ich melde die Verzögerung früh und bespreche Hilfe oder einen neuen Ablauf.",
        "erklaerung": "Frühe Information hilft dem Team, die weitere Arbeit zu planen. Eine neue Absprache ist hilfreicher als eine überraschende Verzögerung.",
        "tipp": "Denke daran, welche Information die anderen für ihre eigene Arbeit brauchen."
      },
      {
        "typ": "Multiple Choice",
        "frage": "Eine Person bleibt im Gespräch sehr still. Welche Aussage vermeidet eine vorschnelle Bewertung?",
        "antworten": [
          "Ich weiß noch nicht, warum sie still ist. Ich frage, ob sie etwas ergänzen möchte.",
          "Sie ist still. Deshalb hat sie vermutlich keine brauchbare Idee.",
          "Sie ist still. Deshalb möchte sie sicher nicht im Team arbeiten."
        ],
        "richtig": "Ich weiß noch nicht, warum sie still ist. Ich frage, ob sie etwas ergänzen möchte.",
        "erklaerung": "Für stilles Verhalten kann es viele Gründe geben. Freundliches Nachfragen gibt der Person Raum, ohne ihr etwas zu unterstellen.",
        "tipp": "Unterscheide beobachtbares Verhalten von einer Vermutung über die Person."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Ein Teammitglied sagt: „Deine Erklärung war zu schnell.“ Wie gehst du konstruktiv damit um?",
        "antworten": [
          "Ich erkläre denselben Ablauf noch einmal genauso schnell.",
          "Ich frage, welcher Schritt unklar war, und erkläre ihn langsamer.",
          "Ich sage, dass die Person beim nächsten Mal besser zuhören soll."
        ],
        "richtig": "Ich frage, welcher Schritt unklar war, und erkläre ihn langsamer.",
        "erklaerung": "Nachfragen zeigt, wo Hilfe gebraucht wird. Du kannst deine Erklärung dann gezielt anpassen.",
        "tipp": "Welche Reaktion hilft, das konkrete Verständnisproblem zu lösen?"
      }
    ]
  },
  {
    "id": "betrieb",
    "titel": "Verhalten im Betrieb",
    "symbol": "⚑",
    "beschreibung": "Lerne, worauf es im Arbeitsalltag ankommt.",
    "freigeschaltet": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Du sollst ein unbekanntes Gerät benutzen. Welche Vorbereitung reicht für einen sicheren Start?",
        "antworten": [
          "Ich sehe ein kurzes Video über ein ähnlich aussehendes Gerät.",
          "Ein anderer Praktikant zeigt mir, welchen Knopf er meistens drückt.",
          "Die zuständige Person weist mich am Gerät ein und klärt, ob ich es benutzen darf."
        ],
        "richtig": "Die zuständige Person weist mich am Gerät ein und klärt, ob ich es benutzen darf.",
        "erklaerung": "Du brauchst die passende Einweisung und die Erlaubnis zur Benutzung. Ein allgemeines Video oder ein einzelner Handgriff ersetzt das nicht.",
        "tipp": "Achte auf das konkrete Gerät, die zuständige Person und die Regeln des Betriebs."
      },
      {
        "typ": "Richtig / Falsch",
        "frage": "Auch wenn ich ein Gerät schon aus einem anderen Betrieb kenne, muss ich vor der Benutzung die Einweisung und Erlaubnis im jetzigen Betrieb klären.",
        "antworten": [
          "Richtig",
          "Falsch"
        ],
        "richtig": "Richtig",
        "erklaerung": "Geräte, Aufgaben und Regeln können unterschiedlich sein. Frühere Erfahrung ersetzt die nötige Einweisung und Erlaubnis vor Ort nicht.",
        "tipp": "Kannst du sicher davon ausgehen, dass Gerät und Regeln in beiden Betrieben gleich sind?"
      },
      {
        "typ": "Lückentext",
        "frage": "Bei einer unklaren Arbeitsanweisung kläre ich den nächsten Schritt mit der ___ Person.",
        "antworten": [
          "zuständigen",
          "nächststehenden",
          "schnellsten"
        ],
        "richtig": "zuständigen",
        "erklaerung": "Die zuständige Person kann den Auftrag erklären oder passende Hilfe organisieren. Wer zufällig in der Nähe ist, weiß nicht unbedingt genug darüber.",
        "tipp": "Nähe oder Schnelligkeit sagt noch nichts über die Verantwortung für die Aufgabe aus."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du bemerkst einen Fehler, der die weitere Arbeit beeinflussen kann. Was ist der beste nächste Schritt?",
        "antworten": [
          "Ich ändere den Ablauf selbst und berichte erst bei der Abgabe.",
          "Ich informiere die zuständige Person und kläre die Korrektur.",
          "Ich arbeite erst fertig und hoffe, dass die Endkontrolle es bemerkt."
        ],
        "richtig": "Ich informiere die zuständige Person und kläre die Korrektur.",
        "erklaerung": "Eine rechtzeitige Meldung ermöglicht eine abgestimmte Korrektur. Eigenmächtige Änderungen oder Abwarten können weitere Fehler verursachen.",
        "tipp": "Wer muss Bescheid wissen, bevor weitere Arbeit auf dem Fehler aufbaut?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Situation zeigt Zuverlässigkeit am deutlichsten?",
        "antworten": [
          "Ich nehme jede zusätzliche Aufgabe an, auch wenn die Zeit nicht reicht.",
          "Ich melde Schwierigkeiten erst, wenn die Abgabefrist vorbei ist.",
          "Ich halte Absprachen ein und sage früh Bescheid, wenn eine Frist nicht klappt."
        ],
        "richtig": "Ich halte Absprachen ein und sage früh Bescheid, wenn eine Frist nicht klappt.",
        "erklaerung": "Zuverlässigkeit heißt auch, realistisch zu planen und Probleme früh anzusprechen. Viele Zusagen allein reichen nicht.",
        "tipp": "Andere müssen mit deiner Zusage planen können. Was hilft bei einer Änderung?"
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Die vorgeschriebene Schutzkleidung ist beschädigt. Du sollst gleich anfangen. Was tust du?",
        "antworten": [
          "Ich beginne die betroffene Arbeit noch nicht und kläre passenden Ersatz mit der zuständigen Person.",
          "Ich beginne besonders vorsichtig und melde den Schaden in der nächsten Pause.",
          "Ich entscheide selbst, dass eine ähnliche private Kleidung ausreichend schützt."
        ],
        "richtig": "Ich beginne die betroffene Arbeit noch nicht und kläre passenden Ersatz mit der zuständigen Person.",
        "erklaerung": "Beschädigte Schutzkleidung kann ihre Schutzfunktion verlieren. Kläre vor der betroffenen Arbeit, wie du sicher ausgerüstet wirst.",
        "tipp": "Überlege, ob Vorsicht allein fehlenden Schutz ersetzen kann."
      },
      {
        "typ": "Was würdest du tun?",
        "frage": "Du bist unsicher, ob du für eine Pause deinen Arbeitsplatz verlassen darfst. Was ist sinnvoll?",
        "antworten": [
          "Ich richte mich nach der Pause einer Person aus einer anderen Abteilung.",
          "Ich kläre die Pausenregel und eine nötige Übergabe mit der zuständigen Person.",
          "Ich gehe kurz weg und kläre die Regel nach meiner Rückkehr."
        ],
        "richtig": "Ich kläre die Pausenregel und eine nötige Übergabe mit der zuständigen Person.",
        "erklaerung": "Pausen und Übergaben können je nach Arbeitsplatz unterschiedlich geregelt sein. Kläre die Regeln für deinen Bereich.",
        "tipp": "Welche Information brauchst du für genau deinen Arbeitsplatz?"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Du hast eine Aufgabe beendet und wartest auf den nächsten Auftrag. Welche Handlung passt am besten?",
        "antworten": [
          "Ich beginne selbst eine neue Aufgabe an einem Gerät, das ich noch nicht kenne.",
          "Ich übernehme ohne Absprache die Aufgabe einer anderen Person.",
          "Ich melde, dass ich fertig bin, und frage nach dem nächsten Schritt."
        ],
        "richtig": "Ich melde, dass ich fertig bin, und frage nach dem nächsten Schritt.",
        "erklaerung": "So zeigst du Initiative und stimmst dich ab. Neue Tätigkeiten oder Geräte können eine Einweisung und Erlaubnis erfordern.",
        "tipp": "Suche eine Handlung, die Eigeninitiative mit einer passenden Absprache verbindet."
      }
    ]
  }
];
