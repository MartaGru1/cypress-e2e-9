const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewpointHeight:1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.techglobal-training.com/'
  },
});
