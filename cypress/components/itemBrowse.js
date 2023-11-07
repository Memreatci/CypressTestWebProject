class itemBrowse {

    priceDetail = '[class="new-price-script-lib price big length-5"]';
    pictureDetail = '#product-sidebar';
    descriptionDetail = '.details';
    addToCartButton = 'div.price-sidebar div.price-button';

    itemBrowseVisbility() {
        // product page verification
        cy.get(this.priceDetail).should('be.visible');
        cy.get(this.pictureDetail).should('be.visible')
        cy.get(this.descriptionDetail).should('be.visible')
        cy.get(this.addToCartButton).should('be.visible')
    };
};

module.exports = new itemBrowse();