class CheckoutPage {
    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
    }
    selectProduct() {
        cy.contains('Samsung galaxy s6').click();
        cy.get('.btn-success').click();
    }
    goToCart() {
        cy.get('#cartur').click();
    }
    placeOrder() {
        cy.contains('Place Order').click();
        cy.get('#name').type('Gietha Novita');
        cy.get('#country').type('Indonesia');
        cy.get('#city').type('Bekasi');
        cy.get('#card').type('1234567890123456');
        cy.get('#month').type('12');
        cy.get('#year').type('2025');
        cy.contains('Purchase').click();
    }
}
export default CheckoutPage;
