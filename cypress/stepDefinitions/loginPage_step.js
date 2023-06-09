

// import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

// When("I navigate to Home page", () => {
//     cy.visit("https://bloomenty.com/nl/home");
//   });

import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";

const homePagePage = new HomePagePage();

