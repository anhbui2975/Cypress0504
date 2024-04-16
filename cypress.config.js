const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
module.exports = {
    e2e: {
        specPattern: [
            "Cypress/e2e/1-getting-started/*.js",
            "Cypress/e2e/2-advanced-examples/*.js",
            "Cypress/e2e/3-integration/example/*.js",
            "Cypress/e2e/integration/example/*.js",
            "Cypress/e2e/Section 5/*.js",
            "Cypress/e2e/Section 6/*.js",
            "Cypress/e2e/Section 7/*.js",
            "Cypress/e2e/Section 8/*.js",
        ]
    }
};