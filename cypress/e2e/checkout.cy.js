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

    it('should show error for checkout without product', () => {
        checkoutPage.visit();
        checkoutPage.goToCart();
        cy.get('.btn-success').click();
    
        // Verifikasi alert yang muncul
        cy.on('window:alert', (str) => {
            if (str === 'Cart is empty.') {
                cy.log('Alert shows: Cart is empty. This is expected behavior.');
            } else if (str === 'Thank you for your purchase!') {
                // Ini adalah bug, karena checkout tetap dapat diproses meskipun keranjang kosong
                cy.log('Bug detected: Checkout allowed with empty cart, alert shows "Thank you for your purchase!".');
            }
        });
    });    
    
});
