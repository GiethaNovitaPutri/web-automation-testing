import SignupPage from '../support/pageObjects/SignupPage';

describe('Sign Up Test', () => {
    const signupPage = new SignupPage();

    it('should sign up successfully', () => {
        const uniqueUsername = `user_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
        const password = 'newpassword';

        signupPage.visit();
        signupPage.clickSignup();
        cy.get('.modal-content').should('be.visible');
        cy.get('#sign-username').clear().type(uniqueUsername);
        cy.get('#sign-password').clear().type(password);
        cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });
    });

    it('should show error for empty fields', () => {
        signupPage.visit();
        signupPage.clickSignup();
        cy.get('.modal-content').should('be.visible');
        cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.');
        });
    });

    it('should show error for already registered user', () => {
        const registeredUsername = 'existinguser';
        const password = 'password123';

        signupPage.visit();
        signupPage.clickSignup();
        cy.get('#sign-username').clear().type(registeredUsername);
        cy.get('#sign-password').clear().type(password);
        cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.');
        });
    });
});
