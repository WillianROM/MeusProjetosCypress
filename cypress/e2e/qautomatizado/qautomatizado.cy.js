///<reference types="cypress"/>

import el from '../../support/qautomatizado/elements'
import env from '../../enviroments/qautomatizado'

let dataQautomatizado

describe('Acessar o site',()=>{
    before(()=>{
        cy.fixture('data/data.qautomatizado').then((data) =>{
            dataQautomatizado = data
        })

        cy.visit(env.baseUrl)
            .get(el.INICIAL_VALIDATION.P_MENTORIA)
            .should('have.text','Mentoria de Automação')

        cy.get(el.ENTRANCE_BUTTON.BUTTON_ENTRANCE)
            .click()
    })


        it('Should fill out the form',()=>{
            cy.fillOutTextFields(dataQautomatizado)            
            cy.get(el.RADIO_BUTTON.INPUT_LINKEDIN_RADIO_BUTTON).check()
            cy.checkAndUncheckCheckbox()
            cy.checkSelectBoxes()
            cy.finalValitation()
            //Outros códigos Cypress que cou manter nesse projeto para conhecimento
            //cy.pause()
            //cy.screenshot()
            //cy.reload()
        })
 
        //Validação visto nas aulas do QAutomatizado que vou manter nesse projeto para conhecimento:
        it('TIPOS DE VALIDAÇÃO',()=>{
            let a = 1
            let b = 2

            expect(a).equal(1)
            expect(a).not.be.equal(2)
            expect(b).equal(2)
            expect(b).not.be.equal(1)

            //Objeto
            const obj = {
                a: 1,
                b: 2
            }

            expect(obj).to.be.equal(obj)
            expect(obj).equal(obj)
            expect(obj).to.have.property('a')
            expect(obj).to.have.property('b')
            expect(obj).eql({a:1,b:2})
        })
})