import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";

const loginPage_selectors = new LoginPage_selectors();

When("I navigate to 'Login' page", () => {
    cy.visit("https://bloomenty.com/ru/myaccount/login");
});

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible");
});

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include', loginPage_selectors.myAccountURL);
});

Then("I should see that 'Email' field on the 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.emailInputField).should("be.visible");
});

Then("I should see that 'Password' field on the 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.passwordInputField).should("be.visible");
})

When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.submitButton).click();
});

// When("I press 'Log out' button on the 'My account' page", () => {
//     cy.get(".nav-item.header-user > ul > li:nth-child(4)").click({force: true});
// });

When("I fill in the 'Email' field on the 'Login' page with Correct data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.emailCorrectData);
})

Then("I should not see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("not.be.visible");
})

When("I fill in the 'Email' field on the 'Login' page with 'No symbols before At' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.noSymbolsBeforeAt);
})

When("I fill in the 'Email' field on the 'Login' page with 'No symbols after At' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.noSymbolsAfterAt);
})

When("I fill in the 'Email' field on the 'Login' page with 'No symbols after dot' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.noSymbolsAfterDot);
})

When("I fill in the 'Email' field on the 'Login' page with 'No dot' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.noDot);
})

When("I fill in the 'Email' field on the 'Login' page with 'No At' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.noAt);
})

When("I fill in the 'Email' field on the 'Login' page with 'One symbols after dot' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_selectors.oneSymbolsAfterDot);
})

Then("I should see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("be.visible");
})

When("I fill in the 'Password' field on the 'Login' page with 'test86'", () => {
    cy.get(loginPage_selectors.passwordInputField).clear().type("test86");
})

Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(".header-user-image > img").should("be.visible");
})

Then("I should see that 'My account' title on the 'My account' page is displayed", () => {
    cy.get(".title-icon > .title").should("be.visible");
})
