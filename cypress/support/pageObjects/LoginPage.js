class LoginPage {
    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
    }
    clickLogin() {
        cy.get('#login2').click();
    }
    fillCredentials(username, password) {
        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);
    }
    submit() {
        cy.get('button[onclick="logIn()"]').click();
    }
}
export default LoginPage;
