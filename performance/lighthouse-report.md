# Teste de Performance - Lighthouse

Ferramenta utilizada: Google Lighthouse  
Navegador: Opera  

---

## Ambiente de teste

URL testada:  
https://paciente-staging.lacreisaude.com.br/

Data do teste:  
09/03/2026

---

# Teste Mobile

Resultados:

Performance: 45  
Accessibility: 96  
Best Practices: 96  
SEO: 82  

Evidência:

![Resultado Lighthouse Mobile](mobile.png)

Observação:

A pontuação de **performance em dispositivos móveis está baixa (45)**, indicando possíveis problemas de carregamento ou otimização da página.

---

# Teste Desktop

Resultados:

Performance: 90  
Accessibility: 96  
Best Practices: 96  
SEO: 82  

Evidência:

![Resultado Lighthouse Desktop](desktop.png)

Observação:

No ambiente **desktop**, a performance apresentou pontuação satisfatória (90), indicando melhor otimização para dispositivos com maior capacidade de processamento.

---

# Conclusão

Foi identificada uma diferença significativa de performance entre **Mobile e Desktop**.

Recomenda-se investigar possíveis melhorias para otimização da versão mobile, como:

- otimização de imagens
- redução de scripts bloqueadores
- melhoria no tempo de carregamento inicial

## Cenário de teste de performance

Os testes de desempenho foram baseados nos cenários descritos no arquivo:

performance/performance.feature