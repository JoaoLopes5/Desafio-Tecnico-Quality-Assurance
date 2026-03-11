#language: pt

Funcionalidade: Teste de desempenho da plataforma
Como usuário da plataforma Lacrei Saúde
Quero que o sistema responda rapidamente
Para conseguir utilizar as funcionalidades sem lentidão

Cenário: Validar tempo de resposta na busca de profissionais
Dado que o usuário esteja na página de busca de profissionais
Quando realizar uma busca por profissionais de saúde
Então o tempo de resposta da página deve ser menor que 3 segundos

Cenário: Validar tempo de resposta no cadastro de usuário
Dado que o usuário esteja na página de cadastro
Quando preencher os dados obrigatórios e enviar o formulário
Então o sistema deve processar o cadastro em menos de 3 segundos

Cenário: Validar estabilidade da aplicação com múltiplos usuários
Dado que 30 usuários estejam acessando a plataforma simultaneamente
Quando realizarem buscas por profissionais ao mesmo tempo
E o tempo de resposta médio deve ser menor que 5 segundos
Então o sistema deve continuar respondendo sem erros ou falhas
