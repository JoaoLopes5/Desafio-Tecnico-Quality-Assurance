# ♿ Teste de Acessibilidade – Lacrei Saúde

## 🛠️ Ferramentas utilizadas

- Google Lighthouse
- DevTools
- Navegação via teclado
- NVDA (leitor de tela)

---

## 🌐 Ambiente de teste

- **URL:** https://paciente-staging.lacreisaude.com.br/  
- **Sistema Operacional:** Windows 10  
- **Navegador:** Microsoft Edge  

---

## ⌨️ Navegação via teclado

Foi realizado teste de navegação utilizando apenas o teclado (tecla TAB).

### ✔️ Resultado:

- Foi possível navegar entre os principais elementos da interface  
- Campos de formulário, links e botões são acessíveis via teclado  
- A ordem de navegação é consistente e funcional  

---

## 🔊 Teste com leitor de tela (NVDA)

Foi realizado teste utilizando o leitor de tela NVDA para validar a acessibilidade para usuários com deficiência visual.

### ✔️ Resultado:

- Elementos interativos (botões, links e inputs) são reconhecidos pelo leitor de tela  
- A navegação é possível utilizando apenas teclado e leitura assistiva  

### ⚠️ Observações:

Durante o preenchimento dos campos de **e-mail e senha**, o NVDA apresentou leitura com informações adicionais além do esperado.

### 🔎 Análise:

- Possível excesso de informações associadas aos campos (label, placeholder e/ou atributos ARIA)  
- Pode gerar redundância na leitura dos elementos  
- Pode impactar a clareza da navegação para usuários de leitores de tela  

### 📌 Recomendação:

- Revisar uso de `label`, `placeholder` e `aria-label` para evitar duplicidade  
- Garantir que as descrições sejam objetivas e não repetitivas  
- Priorizar clareza na leitura dos campos de formulário  

---

## 📊 Avaliação de acessibilidade com Lighthouse

### 📈 Resultado:

- **Accessibility:** 96  

A pontuação atende o requisito mínimo de acessibilidade estabelecido no desafio (≥ 90).

---

## ⚠️ Possíveis melhorias

Mesmo com pontuação alta, algumas melhorias podem ser consideradas:

- Garantir que todos os elementos interativos possuam labels adequados  
- Revisar contraste de cores em textos secundários  
- Garantir compatibilidade completa com leitores de tela  
- Evitar duplicidade de informações em campos de formulário  
- Melhorar uso de atributos ARIA quando necessário  

---

## 📌 Conclusão

A aplicação apresenta um bom nível de acessibilidade, com destaque para:

- Navegação via teclado funcional  
- Alta pontuação no Lighthouse  
- Compatibilidade geral com leitor de tela  

No entanto, foram identificadas oportunidades de melhoria relacionadas à clareza das informações lidas pelo NVDA, especialmente em campos de formulário, que podem impactar a experiência de usuários com deficiência visual.