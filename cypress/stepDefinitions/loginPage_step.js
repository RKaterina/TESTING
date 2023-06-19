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
    cy.get(loginPage_selectors.emailinputField).should("be.visible");
});

Then("I should see that 'Password' field on the 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.passwordinputField).should("be.visible");
})

When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.submitButton).click();
});

When("I fill in the 'Email' field on the 'Login' page with 'edaglidenok.86+86@gmail.com'", () => {
    cy.get(loginPage_selectors.emailinputField).clear().type("edaglidenok.86+86@gmail.com");
})

When("I fill in the 'Password' field on the 'Login' page with 'test86'", () => {
    cy.get(loginPage_selectors.passwordinputField).clear().type("test86");
})

Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(".header-user-image > img").should("be.visible");
})

Then("I should see that 'My account' title on the 'My account' page is displayed", () => {
    cy.get(".title-icon > .title").should("be.visible");
})

  //   Then("I should see that 'error' message on the 'Login' page is displayed", () => {
//     cy.get(".alert").should("be.visible");
//   });