import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const personas = {
    "Herr Müller": "persona-mueller.json"
}

const pages = {
    "terminauswahl": "/terminauswahl",
    "fehlerseite": "/fehlerseite",
    "filialsuche": "/filialsuche",
    "bestätigung": "/bestaetigung"
}

When(`hat Filiale Id {string} ausgewählt`, function (filialeId) {
    cy.get("[data-filiale-id=" + filialeId + "]").click();
});

Given(/^es gibt folgende Filialen:$/, (dataTable) => {

    cy.log(dataTable.rawTable.slice(1))

    const id = 2;
    const name = 0;
    const available = 1;

    const response = dataTable.rawTable
        .slice(1)
        .reduce((filialen, filiale, index) => {
                filialen.push({id: filiale[id], name: filiale[name], pilot: filiale[available] === "true"});
                return filialen;
            }, []
        )

    cy.route2("filiale/12", {
        body: response
    })
    cy.log(dataTable);
});

Given(`{string} hat den KundeWerden Prozess erfolgreich abgeschlossen`, function (persona) {
    cy.fixture(personas[persona]).as("persona").then(() => {
        cy.route2("dtvifa/context", {body: this.persona})
    })

});

And(`eine Auftragsnummer {string} erhalten`, function (auftragsnummer) {
    cy.log(`Testrun für ${this.persona.name} ${this.persona.vorname}`)
});


When(`der Kunde auf die {string} Page navigiert`, function (pageString) {
    cy.visit(pages[pageString.toLowerCase()]);
});

When(`der Kunde ist auf der {string} Seite`, function (pageString) {
    cy.visit(pages[pageString.toLowerCase()]);
});

Then(`sieht der Kunde {string}`, function (expectedString) {
    cy.contains(expectedString);
});

Then(`wird der Kunde zur {string} weitergeleitet`, function (expectedString) {
    cy.url().should("include", pages[expectedString.toLowerCase()]);
});

Then(`wird die Meldung {string} angezeigt`, function (expectedString) {
    cy.get("[data-message-component]").should("contain", expectedString);
});

When(`der Kunde auf {string} klickt`, function (expectedString) {
    cy.contains(expectedString).click();
});

When(`hat einen Termin ausgewählt`, function () {
    cy.get("li").first().click();
});

When(`hat Termin Id {string} ausgewählt`, function (terminId) {
    cy.get("[data-termin-id=" + terminId + "]").click();
});

When(/^es gibt folgende Termine:$/, (dataTable) => {

    cy.log(dataTable.rawTable.slice(1))

    const id = 3;
    const name = 0;
    const available = 2;

    dataTable.rawTable
        .slice(1)
        .forEach((termin) => {
            if (termin[available] === "true") {
                cy.route2("dtvifa/buchen/" + termin[id], {statusCode: 200})
            } else {
                cy.route2("dtvifa/buchen/" + termin[id], {
                    statusCode: 400,
                    body: {text: "Bitte wählen sie einen anderen Termin"}
                })
            }
        });

    const response = dataTable.rawTable
        .slice(1)
        .reduce((termine, termin, index) => {
                termine.push({id: termin[id], name: termin[name]});
                return termine;
            }, []
        )

    cy.route2("dtvifa/slots", {
        body: response
    })
    cy.log(dataTable);
});