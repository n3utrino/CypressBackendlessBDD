# language: de
Funktionalität: Fehlerhandling

  Beim buchen eines Termin sollen die Fehlerzustände den Kunden
  richtig informieren und auf eine hilfreiche Fehlerseite weiterleiten.

  Grundlage:
    Angenommen "Herr Müller" hat den KundeWerden Prozess erfolgreich abgeschlossen

  Szenario: Termin wurde schon gebucht und Kunde versucht es ein zweites Mal
    Angenommen der Kunde hat erfolgreich einen Termin gebucht
    Und es gibt folgende Termine:
      | Name    | Uhrzeit     | Verfuegbar | Id |
      | Termin1 | 10:00-11:00 | true       | 1  |
    Und der Kunde ist auf der "Terminauswahl" Seite
    Und hat einen Termin ausgewählt
    Wenn der Kunde auf "Weiter" klickt
    Dann wird die Meldung "Sie haben bereits einen Termin gebucht" angezeigt

  Szenario: Filialsuche Service ist nicht verfügbar
    Angenommen "Filialsuche" Service ist nicht verfügbar
    Wenn der Kunde auf die "Filialsuche" Page navigiert
    Dann wird der Kunde zur "Fehlerseite" weitergeleitet
    Und wird die Meldung "Tut uns leid Filialsuche nicht verfügbar, rufen Sie an." angezeigt

  Szenario: DtvIfa ist nicht verfügbar
    Angenommen der Kunde ist auf der "Filialsuche" Seite
    Und "DtvIfa" Service ist nicht verfügbar
    Wenn der Kunde auf "Auswählen" klickt
    Dann wird der Kunde zur "Fehlerseite" weitergeleitet
    Dann wird die Meldung "Tut uns leid DtvIfa nicht verfügbar, rufen Sie an." angezeigt

  Szenario: Kunde will mehr als maximal erlaubte Anzahl Wochen blättern
    Angenommen der Kunde ist auf der "Terminauswahl" Seite
    Und ist auf der maximal erlaubten Anzahl Wochen in der Zukunft
    Wenn der Kunde auf "Nächste Woche" klickt
    Dann wird die Meldung "Maximale Wochen rufen sie an" angezeigt

  Szenario: Der vom Kunden gewählte Termin ist nicht mehr verfügbar
    Angenommen es gibt folgende Termine:
      | Name    | Uhrzeit     | Verfuegbar | Id |
      | Termin1 | 10:00-11:00 | false      | 1  |
      | Termin2 | 12:00-13:00 | true       | 2  |
      | Termin3 | 12:00-13:00 | true       | 3  |
      | Termin4 | 12:00-13:00 | true       | 4  |
    Und der Kunde ist auf der "Terminauswahl" Seite
    Und hat Termin Id "1" ausgewählt
    Wenn der Kunde auf "Weiter" klickt
    Dann wird die Meldung "Bitte wählen sie einen anderen Termin" angezeigt
    Und werden die verfügbaren Termine aktualisiert

  Szenario: Das DtvToken ist abgelaufen
    Angenommen der Kunde ist auf der "Terminauswahl" Seite
    Und das DtvToken ist abgelaufen
    Wenn der Kunde auf "Weiter" klickt
    Dann wird die Meldung "Token Abgelaufen, rufen sie An" angezeigt
