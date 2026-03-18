# 🧪 Desafio QA - Lacrei Saúde

## 🎯 Objetivo

Realizar testes na plataforma da Lacrei Saúde com o objetivo de validar funcionalidades, identificar falhas, avaliar a qualidade da aplicação e documentar evidências de forma estruturada.

---

## 🔍 Escopo dos testes

Foram realizados testes nos principais fluxos da aplicação:

* Cadastro de pessoa usuária
* Busca de profissional de saúde
* Recuperação de senha

Os cenários foram escritos utilizando **Gherkin (BDD)**, proporcionando melhor legibilidade e alinhamento com regras de negócio.

---

## ✅ Estratégia de Testes

A abordagem de testes contemplou:

* Testes funcionais
* Testes negativos (validação de entradas inválidas)
* Testes de responsividade
* Testes de acessibilidade
* Testes de performance

### 🔎 Cenários negativos implementados

Foram considerados cenários como:

* Cadastro com e-mail inválido
* Submissão de formulário com campos vazios
* Senhas divergentes
* Tentativas com dados incorretos

---

## 🐞 Registro de Bugs

Os bugs identificados foram documentados seguindo um padrão estruturado contendo:

* Descrição
* Passos para reprodução
* Resultado esperado
* Resultado atual
* Severidade
* Prioridade
* Impacto
* Ambiente de execução
* Evidências (prints/vídeos)

📄 Documentação completa:
https://www.notion.so/744eb36fbfce4a29a69ac330ea7592c6?v=488f078245434eb5acb3ebcbde57f719

---

## 🧰 Tecnologias utilizadas

* Cypress
* Cucumber (BDD)
* Google Lighthouse
* NVDA (leitor de tela)
* GitHub Actions
* Notion

---

## 🧪 Arquitetura da Automação

O projeto utiliza o **Cypress** para automação de testes end-to-end, estruturado com base em **BDD (Behavior Driven Development)** e com uso de **Page Object Model (POM)** para organização das interações com a interface.

A arquitetura foi definida visando:

* Separação de responsabilidades
* Reutilização de código
* Facilidade de manutenção
* Escalabilidade dos testes

### 📂 Estrutura do projeto

cypress/
├─ data/                  → massa de dados dinâmica utilizada nos testes
├─ e2e/
│   ├─ features/          → cenários escritos em Gherkin
│   └─ step_definitions/  → implementação dos testes automatizados
├─ fixtures/              → dados estáticos para testes
└─ support/
├─ Pages/             → Page Objects (ações e elementos da interface)
├─ commands.js        → comandos customizados
└─ e2e.js             → configurações globais do Cypress

performance/               → testes de performance
accessibility/             → testes de acessibilidade
responsiveness/            → testes de responsividade
bugs/                      → documentação dos bugs

### 🧩 Padrões aplicados

* BDD com Gherkin
* Page Object Model (POM)
* Separação entre cenários, ações e dados
* Reutilização de comandos Cypress

---

## 🔄 Fluxo de execução dos testes

O fluxo de execução da automação segue as etapas abaixo:

1. Inicialização do Cypress
2. Leitura dos arquivos `.feature`
3. Associação com `step_definitions`
4. Utilização dos Page Objects para abstração das ações
5. Execução das interações com a aplicação
6. Validação dos resultados esperados
7. Geração automática de evidências (prints e vídeos)

### 📌 Exemplo de execução

**Cenário: Cadastro de usuário**

* Acesso à página de cadastro
* Geração de dados dinâmicos
* Preenchimento via Page Object
* Submissão do formulário
* Validação do comportamento do sistema

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

git clone https://github.com/JoaoLopes5/Desafio-Tecnico-Quality-Assurance.git

### 2. Instalar dependências

cd Desafio-Tecnico-Quality-Assurance
npm install

### 3. Executar os testes

Modo interativo:

npx cypress open

Modo headless:

npx cypress run

---

## ⚡ Teste de Performance

Análise realizada utilizando Google Lighthouse.

📍 URL testada:
https://paciente-staging.lacreisaude.com.br/

### 📱 Mobile

* Performance: 45
* Accessibility: 96
* Best Practices: 96
* SEO: 82

### 💻 Desktop

* Performance: 90
* Accessibility: 96
* Best Practices: 96
* SEO: 82

### 📊 Métricas detalhadas

* FCP (First Contentful Paint): 1.1s
* LCP (Largest Contentful Paint): 6.9s
* CLS (Cumulative Layout Shift): 0
* TBT (Total Blocking Time): 780ms

### 📌 Análise

* LCP elevado → indica lentidão no carregamento do conteúdo principal
* TBT alto → possível bloqueio da thread principal
* CLS adequado → sem mudanças inesperadas de layout

📄 Relatório completo:
performance/lighthouse-report.md

---

## ♿ Teste de Acessibilidade

Testes realizados utilizando:

* Google Lighthouse
* Navegação via teclado
* NVDA (leitor de tela)

### 📊 Resultado

* Accessibility: 96

### 🔎 Validações realizadas

* Navegação por teclado funcional
* Leitura de elementos com leitor de tela
* Estrutura semântica básica validada

### ⚠️ Observação

Durante o uso do NVDA, os campos de e-mail e senha apresentaram leitura com informações adicionais além do esperado, indicando possível necessidade de melhoria em:

* aria-label
* aria-describedby
* associação correta entre label e input

📄 Documentação completa:
accessibility/accessibility-report.md

---

## 📱 Teste de Responsividade

Testes realizados utilizando DevTools.

### 📐 Resoluções testadas

* Mobile (≤600px)
* Desktop (>1024px)

### ✔️ Validações

* Layout
* Usabilidade
* Funcionamento dos elementos

📄 Documentação completa:
responsiveness/responsiveness-report.md

---

## 🔐 Checklist de segurança

Durante os testes foram validados:

* Campos obrigatórios
* Validação de e-mail
* Mensagens de erro adequadas
* Prevenção de envio de formulários inválidos
* Comportamento com dados incorretos

---

## 🔁 Processo de rollback

git revert <commit-id>

ou

git checkout <commit-id>

---

## 📌 Conclusão

O projeto apresenta uma abordagem completa de qualidade, contemplando:

* Testes funcionais
* Testes negativos
* Testes de performance
* Testes de acessibilidade
* Testes de responsividade


