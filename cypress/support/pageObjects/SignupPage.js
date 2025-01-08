class SignupPage {
    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
    }
    clickSignup() {
        cy.wait(5000);
        cy.get('#signin2').click();
    }
    fillDetails(username, password) {
        cy.get('input[name="username"]').type(username); // pastikan selector ini benar
        cy.get('input[name="password"]').type(password); // pastikan selector ini benar
     }
     
    submit() {
        cy.get('button[onclick="register()"]').click();
    }
}
export default SignupPage;
