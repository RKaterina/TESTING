export default class HomePagePageObj {

    checkCookiesPageVisibility(status) {
        status == true
            ? cy.get("#cookies").should("be.visible")
            : cy.get("#cookies").should("not.be.visible");
    }
}


