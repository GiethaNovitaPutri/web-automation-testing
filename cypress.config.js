const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,                // Menampilkan grafik
        reportPageTitle: 'My Report',
        embeddedScreenshots: true,   // Screenshot disematkan
        inlineAssets: true,          // Tidak perlu file eksternal
        saveAllAttempts: false,      // Menyimpan semua percobaan pengujian
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://www.demoblaze.com',
    },
});
