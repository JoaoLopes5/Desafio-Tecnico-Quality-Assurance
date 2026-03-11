#language: pt

Funcionalidade: Cadastro de pessoa usuária
Como usuário da plataforma
Quero me cadastrar
Para poder buscar profissionais de saúde

Contexto:
Dado que eu acesse a página de cadastro

Cenário: Cadastro com dados válidos
Quando eu preencher os dados obrigatórios corretamente
E clicar no botão "Cadastrar"
Então o sistema deve concluir o cadastro com sucesso
E devo ser redirecionado para a página inicial da plataforma

Cenário: Buscar profissionais após login
Dado que estou na página inicial da plataforma
Quando eu acessar a área de busca de profissionais
E pesquisar por uma especialidade
Então o sistema deve exibir uma lista de profissionais disponíveis

Cenário: Cadastro com dados inválidos
Quando eu preencher os dados de forma incorreta
E clicar no botão "Cadastrar"
Então o sistema deve exibir uma mensagem de erro informando que os dados são inválidos

Cenário: Cadastro com e-mail já cadastrado
Quando eu preencher os dados utilizando um e-mail já cadastrado
E clicar no botão "Cadastrar"
Então o sistema deve exibir uma mensagem informando que o e-mail já está registrado

Cenário: Cadastro com campos obrigatórios vazios
Quando eu clicar no botão "Cadastrar" sem preencher os campos obrigatórios
Então o sistema deve exibir mensagens informando os campos obrigatórios