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

Cypress.Commands.add('fillOutTextFields', (data) => {
    cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
        .should('exist').and('be.visible').and('be.enabled')
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

Cypress.Commands.add('checkAndUncheckCheckbox',()=>{
    cy.get(el.CHECK_BOX.IMPUT_CHECKBOX_SELENIUM)
        .check()
    cy.get(el.CHECK_BOX.INPUT_CHECKBOX_ROBOT)
        .check() 
    cy.get(el.CHECK_BOX.IMPUT_CHECKBOX_SELENIUM)
        .uncheck() //Desmarca a caixa de seleção
})

Cypress.Commands.add('checkSelectBoxes',()=>{
    cy.get(el.SELECT.SELECT_SIMPLE)
        .select('C#')

    cy.get(el.SELECT.DIV_SELECT_MULTIPLE)
        .type('JavaScript')
    cy.timeout({timeout:5000})
    cy.get('body')
        .type('{enter}')

    cy.wait(2000)

    const tags = ['C#','PYTHON','JAVASCRIPT']
    tags.forEach(valor =>{
        cy.get(el.SELECT.INPUT_SELECT_MULTIPLE)
            .type(valor)
            .type('{downArrow}')
            .type('{enter}')
    })
})

Cypress.Commands.add('finalValitation',()=>{
    cy.get(el.CONFIRM_BUTTON.BUTTON_CONFIRM)
        .click()
    cy.get(el.FINAL_VALIDATION.TOAST)
        .should('contain.text','Dados enviados com sucesso.')
    cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
        .should('be.disabled')
    cy.get(el.CAMP_TXT.TEXTAREA_DESCRIPTION_FIELD)
        .should('not.be.enabled')
})