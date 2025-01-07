const ProductPage = require('../pages/productPage');

describe('Checkout Test', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
    });

    it('should add product to cart and complete checkout', () => {
        ProductPage.addToCart('Samsung galaxy s6');
        ProductPage.checkout('John Doe', 'USA', 'New York', '1234567812345678', '12', '2025');
        cy.contains('Thank you for your purchase!').should('be.visible');
    });
});
