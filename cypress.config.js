const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = 
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/reports',
    reportPageTitle: 'QA_AI_Machina_Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
    on("file:preprocessor",bundler);
    await addCucumberPreprocessorPlugin(on,config);
    
    return config;
    },
    specPattern: "cypress/e2e/specs/**/*.feature",
    excludeSpecPattern: "cypress/e2e/specs/**/*.feature.{js,ts}"
  },
});
