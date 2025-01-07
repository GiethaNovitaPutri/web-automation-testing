class LoginPage {
    elements = {
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginButton: () => cy.contains('button', 'Log in'),
        closeLoginModal: () => cy.get('#logInModal .close')
    };

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }
}

module.exports = new LoginPage();
