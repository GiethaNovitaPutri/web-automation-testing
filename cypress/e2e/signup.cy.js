import SignupPage from '../support/pageObjects/SignupPage';

describe('Sign Up Test', () => {
    const signupPage = new SignupPage();

    it('should sign up successfully', () => {
        // Generate username unik menggunakan kombinasi random string + timestamp
        const uniqueUsername = `user_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
        const password = 'newpassword';

        // Langkah pengujian
        signupPage.visit();
        signupPage.clickSignup();

        // Tunggu modal signup muncul
        cy.get('.modal-content').should('be.visible');

        // Tunggu elemen username dan password muncul sebelum mengisi
        cy.get('#sign-username').clear().type(uniqueUsername, { delay: 100 });  // delay 100ms antara setiap karakter yang diketik
cy.get('#sign-password').clear().type(password, { delay: 100 });
cy.wait(500);  // tunggu sejenak setelah mengetikkan form


        // Tunggu sejenak untuk memastikan data sudah terisi
        cy.wait(500); // delay sebelum submit form

        // Verifikasi nilai yang diinput pada username dan password
        cy.get('#sign-username').should('have.value', uniqueUsername);
        cy.get('#sign-password').should('have.value', password);

        // Klik tombol submit untuk submit form
        cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();;

        // Verifikasi alert setelah submit
        cy.on('window:alert', (str) => {
            if (str === 'This user already exist.') {
                throw new Error('Test failed: Username already exists. Use a unique username.');
            } else {
                expect(str).to.equal('Sign up successful.');
            }
        });
    });
});
