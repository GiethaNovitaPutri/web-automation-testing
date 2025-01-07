class ProductPage {
    elements = {
        productLink: (productName) => cy.contains(productName),
        addToCartButton: () => cy.contains('Add to cart'),
        cartButton: () => cy.get('#cartur'),
        placeOrderButton: () => cy.contains('button', 'Place Order'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        creditCardInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseButton: () => cy.contains('button', 'Purchase'),
    };

    addToCart(productName) {
        this.elements.productLink(productName).click();
        this.elements.addToCartButton().click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added');
        });
        cy.go('back');
    }

    checkout(name, country, city, card, month, year) {
        this.elements.cartButton().click();
        this.elements.placeOrderButton().click();
        this.elements.nameInput().type(name);
        this.elements.countryInput().type(country);
        this.elements.cityInput().type(city);
        this.elements.creditCardInput().type(card);
        this.elements.monthInput().type(month);
        this.elements.yearInput().type(year);
        this.elements.purchaseButton().click();
    }
}

module.exports = new ProductPage();
