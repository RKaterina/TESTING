

// import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

// When("I navigate to Home page", () => {
//     cy.visit("https://bloomenty.com/nl/home");
//   });

import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";

const homePagePage = new HomePagePage();


When("I navigate to Home page", () => {
  cy.visit("https://bloomenty.com/nl/home");
});

When("I should see that 'Cookies' page is displayed", () => {
  homePagePage.checkCookiesPageIsVisible();
});

When("I should see that 'Cookies' page is Not displayed", () => {
  homePagePage.checkCookiesPageIsNotVisible();
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