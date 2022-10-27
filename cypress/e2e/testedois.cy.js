///<reference types="cypress"/>

import el from '../support/locators'

describe('Acessar o site',()=>{
    before(()=>{
        cy.visit('https://qautomatizado-db08c.web.app/')
        cy.get('button.MuiButtonBase-root')
            .click()
    })


        it('',()=>{
            cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
                .should('exist').and('be.visible').and('be.enabled')

            //Campos de Texto
            cy.get(el.CAMP_TXT.INPUT_NAME_FIELD)
                .click()
                .type('João')

            cy.xpath(INPUT_LASTNAME_FIELD)
                .click()
                .type('Barro')

            cy.get(INPUT_EMAIL_FIELD)
                .click()
                .type('joaobarro@birds.com')
                .debug()

            cy.get(TEXTAREA_DESCRIPTION_FIELD)
                .type('Eu sou um pássaro da família Barro, muito prazer.')
            

            //Botões de radio
            cy.get(el.RADIO_BUTTON.INPUT_LINKEDIN_RADIO_BUTTON).check()

            //Checkbox
            cy.get('input#id_checkbox_selenium').check()

            cy.get('input#id_checkbox_robotFramework').check() 

            cy.get('input#id_checkbox_selenium').uncheck() //Desmarca a caixa de seleção

            //Caixas de Seleção
            cy.get('select#id_campo_linguagemProgramacaoSimples').select('C#')


            cy.get('div#mui-component-select-linguagemProgramacao').type('JavaScript')
            cy.timeout({timeout:5000})
            cy.get('body').type('{enter}')

            cy.wait(2000)


            const tags = ['C#','PYTHON','JAVASCRIPT']
            tags.forEach(valor =>{
                cy.get('input[name="multiplaSelecao"]')
                    .type(valor)
                    .type('{downArrow}')
                    .type('{enter}')

            })


            cy.get('#btn_confirm')
                .click()
            cy.get('.Toastify__toast-body > :nth-child(2)')
                .should('contain.text','Dados enviados com sucesso.')
            cy.get('#id_campo_nome')
                .should('be.disabled')
            cy.get('#id_campo_descricao')
                .should('not.be.enabled')

//Dados enviados com sucesso. Clique no botão RESETAR para reiniciar o formulário.

            //cy.pause()
            //cy.screenshot()
            //cy.reload()
            

        })
 

        it.skip('TIPOS DE VALIDAÇÃO',()=>{
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