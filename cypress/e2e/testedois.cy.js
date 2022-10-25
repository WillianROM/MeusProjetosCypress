///<reference types="cypress"/>

describe('Acessar o site',()=>{
    before(()=>{
        cy.visit('https://qautomatizado-db08c.web.app/')
        cy.get('button.MuiButtonBase-root')
            .click()
    })

    describe('Novo teste',()=>{
        it('',()=>{

            cy.get('input#id_campo_nome')
                .should('exist')
                .and('be.visible')
                .and('be.enabled')

            cy.get('input#id_campo_nome')
                .click()
                .type('João')

            
            cy.xpath('//input[@name="sobrenome"]')
                .click()
                .type('Barro')
            cy.get('input#id_campo_email')
                .click()
                .type('joaobarro@birds.com')
            cy.get('textarea#id_campo_descricao')
                .type('Eu sou um pássaro da família Barro, muito prazer.')
            cy.get('input#id_Linkedin')
                .click()
            cy.get('select#id_campo_linguagemProgramacaoSimples')
                .select('JAVASCRIPT')
            cy.get('div.MuiSelect-root')
                .click()
            cy.get('[data-value="2"]')
                .click()
        })
    })

    describe('TIPOS DE VALIDAÇÃO',()=>{
        it.only('',()=>{
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
    
})