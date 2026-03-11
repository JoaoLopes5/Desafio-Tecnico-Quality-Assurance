#language: pt

Funcionalidade: Recuperação de senha
Como usuário da plataforma
Quero recuperar minha senha
Para acessar minha conta

Contexto:
Dado que eu acesse a página de login da plataforma

Cenário: Recuperar senha com sucesso
Quando eu clicar na opção "Esqueci minha senha"
E informar um e-mail válido cadastrado
E clicar no botão "Enviar link"
Então o sistema deve enviar um link de recuperação de senha para o e-mail informado

Cenário: Recuperação de senha com e-mail não cadastrado
Quando eu clicar na opção "Esqueci minha senha"
E informar um e-mail que não está cadastrado
E clicar no botão "Enviar link"
Então o sistema deve exibir uma mensagem informando que o e-mail não foi encontrado

Cenário: Recuperação de senha com campo de e-mail vazio
Quando eu clicar na opção "Esqueci minha senha"
E clicar no botão "Enviar link" sem preencher o e-mail
Então o sistema deve exibir uma mensagem informando que o campo de e-mail é obrigatório