# 🐞 Bug Report – Lacrei Saúde

Este documento reúne os bugs identificados durante a execução dos testes funcionais e de responsividade da aplicação.

---

## 📌 Padrão de Documentação

Todos os bugs seguem o padrão:

- Descrição
- Passos para reprodução
- Resultado esperado
- Resultado atual
- Severidade
- Prioridade
- Impacto
- Evidências

---

## 🌐 Ambiente de Execução

- **Ambiente:** Produção  
- **Navegador:** Opera  
- **Sistema Operacional:** Windows 10  
- **Tipo de Teste:** Funcional e Responsivo  

---

## 🐞 BUG-01 – Falha no fluxo de recuperação de senha

- **Tipo:** Funcional  
- **Severidade:** Alta  
- **Prioridade:** Alta  
- **Impacto:** Usuários não conseguem recuperar acesso à conta  

### 📍 Descrição  
Ao clicar na opção **"Esqueci minha senha"**, o sistema não direciona o usuário para o fluxo de recuperação e recarrega a página atual.

### 🔁 Passos para reprodução  

1. Acessar a página de login  
2. Clicar em **"Esqueci minha senha"**

### ✅ Resultado esperado  
O sistema deve redirecionar o usuário para a etapa de recuperação de senha, permitindo a inserção do e-mail.

### ❌ Resultado atual  
A página é recarregada e o fluxo de recuperação não é iniciado.

### 📎 Evidências  
(Adicionar print ou vídeo)

---

## 🐞 BUG-02 – Redirecionamento incorreto ao clicar no ícone de e-mail

- **Tipo:** Funcional / UI  
- **Severidade:** Média  
- **Prioridade:** Média  
- **Impacto:** Funcionalidade inconsistente e possível confusão do usuário  

### 📍 Descrição  
Ao clicar no ícone de e-mail presente na interface, o sistema abre uma página em branco, sem realizar ação válida.

### 🔁 Passos para reprodução  

1. Acessar a página de login  
2. Clicar no ícone de e-mail  

### ✅ Resultado esperado  
O sistema deveria abrir o cliente de e-mail padrão ou exibir corretamente o endereço de contato.

### ❌ Resultado atual  
Uma página em branco é exibida.

### 📎 Evidências  
(Adicionar print ou vídeo)

---

## 🐞 BUG-03 – Logo não redireciona para a página inicial

- **Tipo:** Navegação / UI  
- **Severidade:** Baixa  
- **Prioridade:** Baixa  
- **Impacto:** Prejudica a usabilidade e padrão de navegação esperado  

### 📍 Descrição  
Ao clicar na logo da aplicação, não ocorre redirecionamento para a página inicial.

### 🔁 Passos para reprodução  

1. Acessar a página de login  
2. Clicar na logo da plataforma  

### ✅ Resultado esperado  
O usuário deve ser redirecionado para a página inicial.

### ❌ Resultado atual  
Nenhuma ação é executada.

### 📎 Evidências  
(Adicionar print ou vídeo)

---

## 🐞 BUG-04 – Opção "Sair da conta" ausente no menu mobile

- **Tipo:** Responsividade / UI  
- **Severidade:** Alta  
- **Prioridade:** Alta  
- **Impacto:** Usuários não conseguem encerrar sessão em dispositivos móveis  

### 📍 Descrição  
Ao acessar a aplicação em resolução mobile, a opção **"Sair da conta"** não é exibida no menu.

### 🔁 Passos para reprodução  

1. Acessar a aplicação  
2. Realizar login com credenciais válidas  
3. Alterar para resolução mobile  
4. Abrir o menu da aplicação  

### ✅ Resultado esperado  
A opção **"Sair da conta"** deve estar visível no menu.

### ❌ Resultado atual  
A opção não é exibida.

### 📎 Evidências  
(Adicionar print ou vídeo)

---

## 📌 Conclusão

Os problemas identificados estão relacionados a:

- falhas em fluxos críticos  
- inconsistências de navegação  
- problemas de interface  
- falhas de responsividade  

Esses pontos impactam diretamente a experiência do usuário e devem ser priorizados para correção.