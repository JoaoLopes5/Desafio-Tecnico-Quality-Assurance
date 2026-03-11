class CadastroPage{
    // Metodos
    visitarPaginaCadastro(){
        cy.visit('/')
        cy.get('.sc-4ff13c04-0 > .KEsPF').click()
    }
    preencherCadastro(nome,sobrenome, email, confimarEmail, senha, confirmarSenha){
        this.campoNome().clear().type(nome)
        this.campoSobreNome().clear().type(sobrenome)
        this.campoEmail().clear().type(email)
        this.campoConfirmarEmail().clear().type(confimarEmail)
        this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmarSenha)
        this.checkTermos().click()
        this.checkIdade().click()
        this.botaoCadastrar().click()
    }

    // Seletores
    campoNome(){return cy.get('[name="firstName"]')}
    campoSobreNome(){return  cy.get('[name="lastName"]')}
    campoEmail(){return cy.get('[name="email"]')}
    campoConfirmarEmail(){return cy.get('[name="email2"]')}
    campoSenha(){return cy.get('[name="password1"]')}
    campoConfirmarSenha(){return cy.get('[name="password2"]')}
    checkTermos(){return  cy.get('.check-container').eq(0)}
    checkIdade(){return cy.get('.check-container').eq(1)}
    botaoCadastrar(){return cy.get('.fyIwOx')}
}

export default new CadastroPage()