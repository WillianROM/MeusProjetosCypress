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
            .get(el.INICIAL_VALIDATION.H1_TICKETBOX)
            .should('have.text', 'TICKETBOX')
    })

    it('Preenchimento do formulário', () => {
        cy.preenchimentoDosCampos(dataTicketBox)
    })
})
