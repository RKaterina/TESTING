
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

When("I navigate to Home page", () => {
    cy.visit("https://bloomenty.com/nl/home");
  });
  
  Then("I should see 'Cookies' page", () => {
    cy.get("#cookies").should("be.visible")
  });
  
  Then("I should see 'your flower community' icon", () => {
    cy.get(".header > .logo > .slogan").should("be.visible")
  });
  
  Then("I should see 'Uw cookievoorkeuren' page header", () => {
    cy.get("#cookies > .modal-container > .modal-title").should("be.visible")
  });
  
  Then("I should see 'Cookies' rules", () => {
    cy.get(".modal-body").should("be.visible")
  });
  
  Then("I should see 'Accept' button", () => {
    cy.get("#confirmCookie").should("be.visible")
  });
  
  Then("I should see 'Not Accept' button", () => {
    cy.get("#rejectCookie").should("be.visible")
  });