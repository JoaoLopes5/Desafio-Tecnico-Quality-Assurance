/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';


describe('Fluxo de cadastro', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

  it('Deve acessar página de cadastro', () => {
    // Dados
    let primeiroNome = faker.person.firstName()
    let sobrenome = ('test')
    let email = faker.internet.email()
    let senha = ('Testedequalidade123.')

    // Acessar o site e a página de cadastro
    cy.visit('/')
    cy.get('.sc-4ff13c04-0 > .KEsPF').click()

    // Preencher os dados
    cy.get('[name="firstName"]').type(primeiroNome)
    cy.get('[name="lastName"]').type(sobrenome)
    cy.get('[name="email"]').type(email)
    cy.get('[name="email2"]').type(email)
    cy.get('[name="password1"]').type(senha)
    cy.get('[name="password2"]').type(senha)

    // Confirmar checkbox
    cy.get(':nth-child(1) > label > .check-container > span').click()
    cy.get(':nth-child(2) > label > .check-container > span').click()

    // Concluir cadastro
    cy.get('.fyIwOx').click()

    // Validar conclusão
    cy.get('.sc-5cca40c-1 > :nth-child(1)')
    .should('contain', 'Agradecemos seu interesse em fazer parte da Lacrei Saúde!')
  })

})