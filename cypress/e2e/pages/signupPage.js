class SignupPage {
    elements = {
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signupButton: () => cy.contains('button', 'Sign up'),
        closeSignupModal: () => cy.get('#signInModal .close')
    };

    signup(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.signupButton().click();
    }
}

module.exports = new SignupPage();
