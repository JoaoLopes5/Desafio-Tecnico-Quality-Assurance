/// <reference types="cypress"/>
import cadastroPage from '../../support/Pages/cadastro-page';
import { gerarUsuario } from '../../data/userData'
import cenarioNegativoPage from '../../support/Pages/cenarioNegativo-page';

describe('Fluxo de cadastro', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
beforeEach(() => {
  // Acessar o site e a página de cadastro
    cadastroPage.visitarPaginaCadastro()
});
  it('Deve concluir cadastro', () => {
    const usuario = gerarUsuario()
    // Preencher os dados
    cadastroPage.preencherCadastro(
      usuario.primeiroNome,
      usuario.sobrenome,
      usuario.email,
      usuario.email,
      usuario.senha,
      usuario.senha)

    // Validar conclusão
    cy.get('.sc-5cca40c-1 > :nth-child(1)')
    .should('contain', 'Agradecemos seu interesse em fazer parte da Lacrei Saúde!')
  })

  it('Deve exibir uma mensagem de e-mail inválido', () => {
    const usuario = gerarUsuario()
    // Preencher os dados
    cenarioNegativoPage.preencherCadastroErrado(
      usuario.primeiroNome, 
      usuario.sobrenome, 
      'teste123gmail.com', 
      'teste123gmail.com', 
      usuario.senha,
      usuario.senha)

    cy.get(':nth-child(3) > .sc-uVWWZ')
    .should('contain', 'Por favor, utilize um formato de e-mail válido.')
});

it('Deve exibir uma mensagem que as senhas são incompatíveis', () => {
   const usuario = gerarUsuario()
   // Preencher os dados
    cenarioNegativoPage.preencherCadastroErrado(
      usuario.primeiroNome, 
      usuario.sobrenome, 
      usuario.email, 
      usuario.email, 
      usuario.senha,
      '123456')

      cy.get(':nth-child(6) > .sc-uVWWZ')
      .should('contain', 'Senhas incompatíveis, tente novamente.')
});

})
