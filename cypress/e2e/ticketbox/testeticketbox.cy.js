///<reference types="cypress"/>

import el from '../../support/ticket-box/elements'
import env from '../../enviroments/ticketbox.json'

let dataTicketBox

describe('Acessar o site', () => {
    before(() => {
        cy.fixture('data/data.ticketbox').then((data)=>{
            dataTicketBox = data
        })
        cy.visit(env.baseUrl)
    })

    it('Preenchimento do formulário', () => {
        cy.get(el.INPUT_FIRST_NAME).type(dataTicketBox.name)
        cy.get(el.INPUT_LAST_NAME).type(dataTicketBox.lastName)
        cy.get(el.INPUT_EMAIL).type(dataTicketBox.email)
        cy.get(el.SELECT_TICKET_QUANTITY).select(dataTicketBox.ticketQuantity)
        cy.get(el.INPUT_RADIO_BUTTON_VIP).check()
        cy.get(el.INPUT_CHECKBOX_SOCIAL_MEDIA).check()
        cy.get(el.TEXTAREA_SPECIAL_REQUESTS).type(dataTicketBox.specialRequestsMessage)
        cy.get(el.INPUT_CHECKBOX_AGREE).check()
        cy.get(el.INPUT_SIGNATURE).type(`${dataTicketBox.name} ${dataTicketBox.lastName}`)
        cy.get('button').contains(dataTicketBox.textButton).click()
        cy.get(el.DIV_TOAST_SUCCESS).should('contain.text',dataTicketBox.textToastSucess)
    })
})
