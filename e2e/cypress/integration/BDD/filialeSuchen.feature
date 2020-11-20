# language: de

Funktionalität: Termin Buchen

  Nach einem abgeschlossenen KundeWerden Prozess kann ein Termin gebucht werden

  Grundlage:
    Angenommen "Herr Müller" hat den KundeWerden Prozess erfolgreich abgeschlossen

  Szenario: Filialsuche
    Angenommen der Kunde auf die "Filialsuche" Page navigiert
    Dann sieht der Kunde "filialsuche works!"

  Szenario: Wählen einer Pilotfiliale
    Angenommen es gibt folgende Filialen:
      | Name        | Pilot | Id |
      | City        | false | 1  |
      | Bülach      | true  | 2  |
      | Uster       | false | 3  |
      | Wet-Sick-On | false | 4  |
    Und der Kunde ist auf der "Filialsuche" Seite
    Und hat Filiale Id "2" ausgewählt
    Wenn der Kunde auf "Auswählen" klickt
    Dann wird der Kunde zur "Terminauswahl" weitergeleitet

  Szenario: Wählen einer nicht Pilotfiliale
    Angenommen es gibt folgende Filialen:
      | Name        | Pilot | Id |
      | City        | false | 1  |
      | Bülach      | true  | 2  |
      | Uster       | false | 3  |
      | Wet-Sick-On | false | 4  |
    Und der Kunde ist auf der "Filialsuche" Seite
    Und hat Filiale Id "4" ausgewählt
    Wenn der Kunde auf "Auswählen" klickt
    Dann wird der Kunde zur "Bestätigung" weitergeleitet
    Und wird die Meldung "Ruf! Mich! An!" angezeigt
