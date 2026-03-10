# Registro de Bugs – Lacrei Saúde

Durante a execução dos testes funcionais e de responsividade foram identificados alguns problemas na aplicação.

Todos os bugs foram documentados contendo:

- descrição do problema
- passos para reprodução
- resultado esperado
- resultado atual
- impacto
- evidências

A documentação detalhada também pode ser encontrada no Notion.

---

# Bug 01 – Erro ao recuperar senha

Tipo: Funcionalidade

Impacto: Alto

## Descrição
Ao clicar no botão **"Esqueci minha senha"** o sistema reinicia a página e não avança para a próxima etapa de recuperação de senha.

## Passos para reprodução

1. Acessar a página de login
2. Clicar em **"Esqueci minha senha"**

## Resultado esperado

O sistema deve prosseguir para a etapa de recuperação de senha permitindo que o usuário informe seu e-mail.

## Resultado atual

A página é reiniciada e o fluxo de recuperação de senha não é iniciado.

---

# Bug 02 – Erro ao clicar no ícone de e-mail

Tipo: Funcionalidade / UI

Impacto: Médio

## Descrição

Ao clicar no ícone de e-mail presente na interface da aplicação, o sistema abre uma página em branco em vez de exibir o e-mail ou redirecionar corretamente.

## Passos para reprodução

1. Acessar a página de login
2. Clicar no ícone de e-mail disponível na interface

## Resultado esperado

O sistema deveria exibir o endereço de e-mail ou abrir o cliente de e-mail corretamente.

## Resultado atual

Uma página em branco é aberta.

---

# Bug 03 – Erro ao voltar para a página principal

Tipo: Navegação / UI

Impacto: Baixo

## Descrição

Ao clicar na logo da plataforma, o sistema não redireciona o usuário para a página principal.

## Passos para reprodução

1. Acessar a página de login
2. Clicar na logo da plataforma Lacrei Saúde

## Resultado esperado

O sistema deveria redirecionar o usuário para a página inicial da aplicação.

## Resultado atual

Nada acontece ao clicar na logo.

---

# Bug 04 – Opção "Sair da conta" não aparece no menu mobile

Tipo: Responsividade / UI

Impacto: Alto

## Descrição

Ao acessar a aplicação em dispositivos mobile, a opção **"Sair da conta"** não aparece no menu da aplicação.

## Passos para reprodução

1. Acessar a plataforma
2. Realizar login com uma conta válida
3. Abrir o menu da aplicação em resolução mobile
4. Verificar as opções exibidas

## Resultado esperado

A opção **"Sair da conta"** deve estar visível no menu para permitir que o usuário encerre sua sessão.

## Resultado atual

A opção **"Sair da conta"** não aparece no menu mobile.

---

# Conclusão

Durante os testes foram identificados problemas relacionados a:

- fluxo de recuperação de senha
- navegação da interface
- funcionamento de elementos da interface
- responsividade do menu mobile

Esses problemas podem impactar a experiência do usuário e devem ser avaliados para correção.