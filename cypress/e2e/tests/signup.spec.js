const SignupPage = require('../pages/signupPage');

describe('Signup Test', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.contains('Sign up').click();
    });

    it('should sign up successfully', () => {
        SignupPage.signup('newuser', 'newpassword');
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        });
    });
});
