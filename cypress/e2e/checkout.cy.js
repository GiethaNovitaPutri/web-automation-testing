import CheckoutPage from '../support/pageObjects/CheckoutPage';

describe('Checkout Product Test', () => {
    const checkoutPage = new CheckoutPage();

    it('should checkout successfully', () => {
        checkoutPage.visit();
        checkoutPage.selectProduct();
        checkoutPage.goToCart();
        checkoutPage.placeOrder();
        cy.contains('Thank you for your purchase!').should('be.visible');
    });
});
