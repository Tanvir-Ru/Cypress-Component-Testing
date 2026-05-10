const { defineConfig } = require('cypress');

module.exports = defineConfig({
    // ── E2E config ────────────────────────────────────────────────────────
    e2e: {
        baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile: 'cypress/support/e2e.js',
        viewportWidth: 1440,
        viewportHeight: 900,
        video: true,
        videoCompression: 32,
        screenshotOnRunFailure: true,
        defaultCommandTimeout: 10000,
        requestTimeout: 15000,
        retries: { runMode: 2, openMode: 0 },
        setupNodeEvents(on, config) {
            on('task', {
                log(message) { console.log(message); return null; }
            });
            return config;
        }
    },

    // ── Component config ─────────────────────────────────────────────────
    component: {
        devServer: { framework: 'react', bundler: 'webpack' },
        specPattern: 'cypress/component/**/*.cy.js',
        supportFile: 'cypress/support/component.js',
        viewportWidth: 800,
        viewportHeight: 600,
    },

    // ── Shared ────────────────────────────────────────────────────────────
    env: {
        API_URL: process.env.API_URL || 'https://reqres.in/api',
    }
});
