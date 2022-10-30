///<reference types="cypress"/>

describe('Acessar o site', () => {
    before(() => {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")
    })

    it('Preenchimento do formulário', () => {
        cy.get('input#first-name').type('João')
        cy.get('input#last-name').type('De Barro')
        cy.get('input#email').type('joaodebarro@birds.com')
        cy.get('select#ticket-quantity').select('2')
        cy.get('input#vip').check()
        cy.get('input#social-media').check()
        cy.get('textarea#requests').type('I want a cozy nest to watch the event.')
        cy.get('input#agree').check()
        cy.get('input#signature').type('João de Barro')
        cy.get('button').contains('Confirm Tickets').click()
        cy.get('div.success').should('contain.text','Ticket(s) successfully ordered.')
    })
})
