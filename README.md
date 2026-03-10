# Desafio QA - Lacrei Saúde

## Objetivo

Realizar testes na plataforma da Lacrei Saúde para validar funcionalidades, identificar falhas e registrar bugs encontrados durante a navegação.

---

## Escopo dos testes

Foram realizados testes nos seguintes fluxos da aplicação:

* Cadastro de pessoa usuária
* Busca de profissional de saúde
* Recuperação de senha

Os cenários foram escritos utilizando **Gherkin**.

---

## Registro de Bugs

Durante a execução dos testes manuais foram identificados alguns problemas na aplicação.

Os bugs foram documentados com:

* descrição do problema
* passos para reprodução
* resultado esperado
* resultado atual
* impacto e prioridade
* evidências

📄 Documentação completa:
https://www.notion.so/Erro-ao-recuperar-senha-3a483f76aaa44077be061bd5d05dfc39?source=copy_link

---

## Tecnologias utilizadas

* Cypress
* Cucumber
* Lighthouse
* GitHub Actions
* Notion

---

## Estrutura do projeto

```
tests/
 ├─ features/        → cenários de teste em Gherkin
 └─ automation/      → testes automatizados com Cypress

performance/         → testes de performance
accessibility/       → testes de acessibilidade
responsiveness/      → testes de responsividade
bugs/                → documentação dos bugs encontrados
```

---

## Como executar os testes automatizados

1. Clonar o repositório

git clone <URL_DO_REPOSITORIO>

2. Instalar dependências

npm install

3. Executar o Cypress

npx cypress open

---

## Checklist de segurança

Durante os testes foram verificados alguns pontos básicos de segurança da aplicação:

* Validação de campos obrigatórios
* Validação do formato correto de e-mail
* Mensagens de erro adequadas para o usuário
* Prevenção de envio de formulários vazios
* Comportamento correto em caso de dados inválidos

---

## Processo de rollback

Caso algum teste automatizado apresente falha ou comportamento inesperado, é possível reverter alterações utilizando o controle de versão do Git.

Exemplo de rollback para um commit anterior:

git revert <commit-id>

Ou retornar para uma versão específica do projeto:

git checkout <commit-id>

## Teste de Desempenho

Foi realizado um teste de performance utilizando o Google Lighthouse para avaliar o desempenho da aplicação.

### Cenários testados

- Tempo de resposta na busca de profissionais
- Tempo de resposta no cadastro de usuário
- Estabilidade da aplicação com 30 usuários simultâneos

Os cenários de teste estão documentados no arquivo:

performance/performance.feature

### Resultados do Lighthouse

Teste realizado na URL:

https://paciente-staging.lacreisaude.com.br/

#### Mobile

Performance: 45  
Accessibility: 96  
Best Practices: 96  
SEO: 82  

#### Desktop

Performance: 90  
Accessibility: 96  
Best Practices: 96  
SEO: 82  

Evidências disponíveis na pasta:

performance/

## Teste de Acessibilidade

Foi realizada uma avaliação de acessibilidade utilizando Google Lighthouse e navegação via teclado.

Resultados:

Accessibility: 96

Também foi verificada a navegação utilizando a tecla TAB para percorrer elementos interativos da interface.

A aplicação atende o requisito mínimo de acessibilidade (≥ 90).

A documentação completa pode ser encontrada em:

accessibility/accessibility-report.md

## Teste de Responsividade

Foi realizado teste de responsividade utilizando o modo responsivo do DevTools.

Foram avaliadas duas resoluções:

- Mobile (≤600px)
- Desktop (>1024px)

Foram validados:

- Layout
- Funcionalidade
- Usabilidade

A documentação completa pode ser encontrada em:

responsiveness/responsiveness-report.md

## Testes Automatizados

Os testes automatizados foram desenvolvidos utilizando Cypress.

Fluxo automatizado:

- Cadastro de usuário

Para executar os testes localmente:

npx cypress open