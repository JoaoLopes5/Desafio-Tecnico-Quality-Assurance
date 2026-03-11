/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../../support/Pages/cadastro-page';

describe('Fluxo de cadastro', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

  it('Deve acessar página de cadastro', () => {
    // Massa de dados
    let primeiroNome = faker.person.firstName()
    let sobrenome = ('test')
    let email = faker.internet.email()
    let senha = ('Testedequalidade123.')

    // Acessar o site e a página de cadastro
    cadastroPage.visitarPaginaCadastro()

    // Preencher os dados
    cadastroPage.preencherCadastro(primeiroNome, sobrenome, email, email, senha, senha)

    // Validar conclusão
    cy.get('.sc-5cca40c-1 > :nth-child(1)')
    .should('contain', 'Agradecemos seu interesse em fazer parte da Lacrei Saúde!')
  })

})