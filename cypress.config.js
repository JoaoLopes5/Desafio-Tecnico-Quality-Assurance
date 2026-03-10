const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/automation/**/*.cy.js",
    baseUrl: "https://paciente-staging.lacreisaude.com.br"
  }
});