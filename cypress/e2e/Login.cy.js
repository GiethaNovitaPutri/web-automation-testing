import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('should login successfully', () => {
        loginPage.visit();
        loginPage.clickLogin();
        loginPage.fillCredentials('validUser', 'validPassword');
        loginPage.submit();
        cy.get('#nameofuser').should('exist'); 
        cy.get('#nameofuser', { timeout: 10000 });
        cy.location('pathname').should('eq', '/index.html');
    });

    it('should fail for incorrect credentials', () => {
        loginPage.visit();
        loginPage.clickLogin();
        loginPage.fillCredentials('wrongUser', 'wrongPassword');
        loginPage.submit();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.');
        });
    });

    it('should fail for empty fields', () => {
        loginPage.visit();
        loginPage.clickLogin();
        loginPage.submit();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.');
        });
    });
});
