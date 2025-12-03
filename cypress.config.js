const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // adicionando variáveis de ambiente ao config
      config.env.EMAIL = process.env.EMAIL;
      config.env.PASSWORD = process.env.PASSWORD;
      config.env.URL_LOGIN = process.env.URL_LOGIN;
      config.env.URL_PASSWORD = process.env.URL_PASSWORD;

      return config;
    },
  },
});
