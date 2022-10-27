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

import el from './locators'

let data = {
    nome: "João",
    sobrenome: "Barro",
    email: "joaobarro@birds.com",
    descricao: "Eu sou um pássaro da família Barro, muito prazer."
}

Cypress.Commands.add('fillOutTextFields', () => {
    cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
    .should('exist').and('be.visible').and('be.enabled')
//Campos de Texto
    cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
        .click()
        .type(data.nome)
    cy.xpath(el.CAMP_TXT.INPUT_LASTNAME_FIELD)
        .click()
        .type(data.sobrenome)
    cy.get(el.CAMP_TXT.INPUT_EMAIL_FIELD)
        .click()
        .type(data.email)
        .debug()
    cy.get(el.CAMP_TXT.TEXTAREA_DESCRIPTION_FIELD)
        .type(data.descricao)
})