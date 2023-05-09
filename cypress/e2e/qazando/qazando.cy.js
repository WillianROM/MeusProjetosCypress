///<reference types="cypress"/>

import el from '../../support/qazando/elements'
import env from '../../enviroments/qazando'

let dataQazando

describe('Acesso ao site', () => { 

    beforeEach(()=>{
        cy.fixture('data/data.qazando').then((data) =>{
            dataQazando = data
        })

        cy.visit(env.baseUrl)
            .get(el.INICIAL_VALIDATION.SECTION_HEADER)
    })


    it('Cadastro no Newsletter com sucesso', ()=>{
       cy.cadastroNoNewsletterComSucesso(dataQazando.email)
        cy.get(el.FINAL_VALIDATION.DIV_THANK_YOU)
            .should('have.text', 'Thank you for your Subscribtion')
    })

})