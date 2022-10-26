///<reference types="cypress"/>

describe('Acessar o site',()=>{
    before(()=>{
        cy.visit('https://qautomatizado-db08c.web.app/')
        cy.get('button.MuiButtonBase-root')
            .click()
    })


        it('',()=>{
            cy.get('input#id_campo_nome').should('exist').and('be.visible').and('be.enabled')

            //Campos de Texto
            cy.get('input#id_campo_nome').click().type('João')

            cy.xpath('//input[@name="sobrenome"]').click().type('Barro').screenshot('sobrenome')

            cy.get('input#id_campo_email').click().type('joaobarro@birds.com').debug()

            cy.pause()

            cy.get('textarea#id_campo_descricao').type('Eu sou um pássaro da família Barro, muito prazer.')
            

            //Botões de radio
            cy.get('input#id_Linkedin').check()

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


            cy.screenshot()
            

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