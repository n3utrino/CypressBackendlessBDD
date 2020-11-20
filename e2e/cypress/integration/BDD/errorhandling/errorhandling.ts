import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import RouteOptions = Cypress.RouteOptions;

const services: { [key: string]: Partial<RouteOptions> } = {
    "filialsuche": {
        url: /filiale\/.*/,
        status: 500
    },
    "dtvifa": {
        url: /dtvifa\/.*/,
        status: 500
    }
}

Given("ist auf der maximal erlaubten Anzahl Wochen in der Zukunft", () => {
    cy.route2("dtvifa/week/next", {statusCode: 400, body: {text: "Maximale Wochen rufen sie an"}})
});

Given("der Termin ist nicht mehr verfügbar", () => {
    cy.route2("dtvifa/buchen/*", {statusCode: 400, body: {text: "Bitte wählen sie einen anderen Termin"}})
});

Given(`das DtvToken ist abgelaufen`, function () {
    cy.route2(/.*dtvifa.*/, {statusCode: 401, body: {text: "Token Abgelaufen, rufen sie An"}}).as("unauthorized");
});

Given(`der Kunde hat erfolgreich einen Termin gebucht`, function () {
    cy.route2("dtvifa/buchen/1", {statusCode: 400, body: {text: "Sie haben bereits einen Termin gebucht"}});
});

Given(`{string} Service ist nicht verfügbar`, function (serviceName) {
    const service = services[serviceName.toLowerCase()]
    cy.route2(service.url, {statusCode: 500});
});

Then("werden die verfügbaren Termine aktualisiert", function () {
    cy.visit("/terminauswahl");
});
