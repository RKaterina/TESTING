import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

When("I navigate to Home page", () => {
    cy.visit("https://bloomenty.com/nl/home#");
});