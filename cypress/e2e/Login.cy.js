import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Test', () => {
    const loginPage = new LoginPage();

    it('should login successfully', () => {
        loginPage.visit();
        loginPage.clickLogin();
        loginPage.fillCredentials('testuser', 'testpassword');
        loginPage.submit();

        // Verifikasi bahwa elemen #nameofuser ada di DOM
        cy.get('#nameofuser').should('exist'); // Memastikan elemen ada di DOM

        // Setelah memastikan elemen ada, verifikasi visibilitasnya
        cy.get('#nameofuser', { timeout: 10000 });
 // Memastikan elemen terlihat

        // Verifikasi path URL setelah login
        cy.location('pathname').should('eq', '/index.html'); // Ganti dengan path yang sesuai
    });
});
