///<reference types="cypress"/>

import el from '../../support/saucedemo/elements'
import env from '../../enviroments/saucedemo'

let dataSoucedemo

describe('Acessar o site saucedemo',()=>{
    beforeEach(()=>{
        cy.fixture('data/data.saucedemo').then((data) =>{
            dataSoucedemo = data
        })

        cy.visit(env.baseUrl)
            .get(el.INICIAL_VALIDATION.DIV_SWAG_LABS)
            .should('have.text','Swag Labs')
        
    })


        it('Acessar o site com sucesso',()=>{
            cy.acessarSiteSauceDemo(dataSoucedemo.username,dataSoucedemo.password)
            cy.get(el.FINAL_VALIDATION.TITLE_PRODUCTS)
                .should('have.text', 'Products')
        })


        it('Acessar o site com senha invalida',()=>{
            cy.acessarSiteSauceDemo(dataSoucedemo.username,"123456789")
            cy.get(el.FINAL_VALIDATION.H3_ERROR_MESSAGE)
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })



        it('Acessar o site com usuario em branco',()=>{
            cy.get(el.CAMP_TXT.INPUT_USERNAME)
                .should('exist').and('be.visible').and('be.enabled')
            cy.get(el.CAMP_TXT.INPUT_PASSWORD)
                .type(dataSoucedemo.password)
            cy.get(el.BUTTONS.INPUT_ENTRANCE)
                .click()
            cy.get(el.FINAL_VALIDATION.H3_ERROR_MESSAGE)
                .should('have.text', 'Epic sadface: Username is required')
        })


        it('Acessar o site com senha em branco',()=>{
            cy.get(el.CAMP_TXT.INPUT_USERNAME)
                .should('exist').and('be.visible').and('be.enabled')
            cy.get(el.CAMP_TXT.INPUT_USERNAME)
                .type(dataSoucedemo.username)
            cy.get(el.BUTTONS.INPUT_ENTRANCE)
                .click()
            cy.get(el.FINAL_VALIDATION.H3_ERROR_MESSAGE)
                .should('have.text', 'Epic sadface: Password is required')
        })


        it('Validar o preço do Backpack',()=>{
            cy.acessarSiteSauceDemo(dataSoucedemo.username,dataSoucedemo.password)
            cy.get(el.FINAL_VALIDATION.TITLE_PRODUCTS)
                .should('have.text', 'Products')
            cy.get(el.BUTTONS.BUTTON_CART_BACKPACK)
                .click()
            cy.get(el.BUTTONS.A_SHOPPING_CART)
                .click()
            cy.get(el.FINAL_VALIDATION.DIV_ITEM_PRICE)
                .should('have.text', '$29.99')
        })


        it('Validar mensagem da tela de checkout sem informar o Postal Code"',()=>{
            cy.acessarSiteSauceDemo(dataSoucedemo.username,dataSoucedemo.password)
            cy.get(el.FINAL_VALIDATION.TITLE_PRODUCTS)
                .should('have.text', 'Products')
            cy.get(el.BUTTONS.A_SHOPPING_CART)
                .click()
            cy.get(el.BUTTONS.BUTTON_CHECKOUT)
                .click()
            cy.get(el.CAMP_TXT.INPUT_FIRST_NAME)
                .type(dataSoucedemo.firstname)
            cy.get(el.CAMP_TXT.INPUT_LAST_NAME)
                .type(dataSoucedemo.lastname)
            cy.get(el.BUTTONS.INPUT_CONTINUE)
                .click()
            cy.get(el.FINAL_VALIDATION.H3_ERROR_MESSAGE)
                .should('have.text', 'Error: Postal Code is required')

        })

})