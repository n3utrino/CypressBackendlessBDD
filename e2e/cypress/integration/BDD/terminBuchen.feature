# language: de

Funktionalität: Termin Buchen

  Nach einem abgeschlossenen KundeWerden Prozess kann ein Termin gebucht werden

  Grundlage:
    Angenommen "Herr Müller" hat den KundeWerden Prozess erfolgreich abgeschlossen

  Szenario: Filialsuche
    Angenommen der Kunde auf die "Filialsuche" Page navigiert
    Dann sieht der Kunde "filialsuche works!"

  Szenario: Bestätigung nach erfolgreicher Terminauswahl
    Angenommen es gibt folgende Termine:
      | Name    | Uhrzeit     | Verfuegbar | Id |
      | Termin1 | 10:00-11:00 | true       | 1  |
      | Termin2 | 12:00-13:00 | true       | 2  |
      | Termin3 | 12:00-13:00 | true       | 3  |
      | Termin4 | 12:00-13:00 | true       | 4  |
    Und der Kunde ist auf der "Terminauswahl" Seite
    Und hat Termin Id "3" ausgewählt
    Wenn der Kunde auf "Weiter" klickt
    Dann wird der Kunde zur "Bestätigung" weitergeleitet
    Und wird die Meldung "Danke für ihre Buchung Herr Müller" angezeigt
