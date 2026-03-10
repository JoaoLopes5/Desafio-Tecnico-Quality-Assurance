#language: pt

Funcionalidade: Buscar e contatar profissional
Como usuário cadastrado
Quero acessar a busca por profissionais
Para contatar um profissional de saúde
Contexto: 
Dado que eu acesse a página inicial da plataforma

Cenário: Buscar e contatar profissional com sucesso
Quando eu pesquisar por uma especialidade ou nome de profissional
E clicar no botão "Pesquisar"
Então o sistema deve exibir uma lista de profissionais de acordo com a pesquisa
E cada profissional deve apresentar a opção "Agendar"
Quando eu selecionar um profissional e clicar em "Agendar"
Então o sistema deve exibir os horários disponíveis
E as informações de contato do profissional

Cenário: Busca de profissional sem resultados
Quando eu pesquisar por uma especialidade ou nome de profissional inexistente
E clicar no botão "Pesquisar"
Então o sistema deve exibir uma mensagem informando que nenhum profissional foi encontrado

Cenário: Profissional sem horários disponíveis
Quando eu pesquisar por uma especialidade ou nome de profissional
E clicar no botão "Pesquisar"
Então o sistema deve exibir uma lista de profissionais de acordo com a pesquisa
E cada profissional deve apresentar a opção "Agendar"
Quando eu selecionar um profissional e clicar em "Agendar" 
E o profissional não ter horários disponíveis
Então o sistema deve exibir uma mensagem informando que o profissional não está disponível no momento
