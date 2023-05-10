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


Cypress.Commands.add('cadastroNoNewsletterComSucesso', (email) => {
    cy.get(el.CAMP_TXT.INPUT_EMAIL)
        .type(email)
    cy.get(el.BUTTONS.BUTTON_SEND_MAIL)
        .click()
})


Cypress.Commands.add('cadastroNoNewsletterComSucessoComEnter', (email) => {
    cy.get(el.CAMP_TXT.INPUT_EMAIL)
        .type(email + '{enter}')
})


Cypress.Commands.add('validacaoFinalCadastroNoNewsletter', (email) => {
    cy.get(el.FINAL_VALIDATION.H2_SUCESS)
        .should('be.visible')
        .should('have.text', 'Success')
    cy.get(el.FINAL_VALIDATION.DIV_THANK_YOU)
        .should('be.visible')
        .should('have.text', 'Thank you for your Subscribtion')
    cy.get(el.BUTTONS.BUTTON_OK)
        .click()
    cy.wait(500)
    cy.get(el.FINAL_VALIDATION.H2_SUCESS)
        .should('not.exist')
    cy.get(el.FINAL_VALIDATION.DIV_THANK_YOU)
        .should('not.exist')
})

