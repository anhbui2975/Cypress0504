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
            "cypress/e2e/1-getting-started/*.js",
            "cypress/e2e/2-advanced-examples/*.js",
            "cypress/e2e/3-integration/example/*.js",
            "cypress/e2e/integration/example/*.js"
        ]
    }
};