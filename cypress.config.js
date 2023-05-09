const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://qautomatizado-db08c.web.app/",
    defaultCommandTimeout: 5000,
    trashAssetsBeforeRuns: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
