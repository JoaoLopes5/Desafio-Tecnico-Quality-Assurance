const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
specPattern: [
"cypress/e2e/step_definitions/**/*.steps.js",
"cypress/e2e/**/*.cy.js"
],
baseUrl: "https://paciente-staging.lacreisaude.com.br"
}
});