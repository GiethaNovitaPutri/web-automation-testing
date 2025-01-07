const LoginPage = require('../pages/loginPage');

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.contains('Log in').click();
    });

    it('should login successfully', () => {
        LoginPage.login('testuser', 'testpassword');
        cy.contains('Welcome testuser').should('be.visible');
    });
});
