// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import el from './elements'


Cypress.Commands.add('acessarSiteSauceDemo', (username, password) => {
    cy.get(el.CAMP_TXT.INPUT_USERNAME)
        .should('exist').and('be.visible').and('be.enabled')
    cy.get(el.CAMP_TXT.INPUT_USERNAME)
        .type(username)
    cy.get(el.CAMP_TXT.INPUT_PASSWORD)
        .type(password)
    cy.get(el.BUTTONS.INPUT_ENTRANCE)
        .click()
})



