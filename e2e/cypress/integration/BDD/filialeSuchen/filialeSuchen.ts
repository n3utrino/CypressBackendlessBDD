import {When} from "cypress-cucumber-preprocessor/steps";

When(`hat Filiale Id {string} ausgewählt`, function (filialeId) {
    cy.get("[data-filiale-id=" + filialeId + "]").click();
});

When(/^es gibt folgende Filialen:$/, (dataTable) => {

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