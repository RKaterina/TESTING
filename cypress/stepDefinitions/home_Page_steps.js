

// import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

// When("I navigate to Home page", () => {
//     cy.visit("https://bloomenty.com/nl/home");
//   });

import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";

import HomePagePage from "../pageObjects/homePage_page.js";

const homePagePage = new HomePagePage();

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

  When("I should see that 'Cookies' page is displayed", () => {
    homePagePage.chekcCookiesPageIsVisible();
  });
  
  When("I should see that 'Cookies' page is Not displayed", () => {
    cy.get("#cookies").should("not.be.visible");
  });
  
  When("I press 'Cancel' button on the 'Cookies' page", () => {
    cy.get("#rejectCookie").click();
  });
  
  When("I clear all Cookies", () => {
    cy.clearCookies()
  });
  
  When("I refresh the page", () => {
    cy.reload()
  });
  
  When("I wait for 3 seconds", () => {
    cy.wait(3000)
  });
  
  Then("I should see {string} on the 'Cookies' page", (itemCookiesPage) => {
    cy.get("itemCookiesPage").should("be.visible");
  });