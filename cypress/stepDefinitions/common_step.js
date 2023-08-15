import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import HomePage_selectors from "../selectors/homePage_selectors.js";
import Header_selectors from "../selectors/header_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import HomePage_page from "../pageObjects/homePage_page.js";

const loginPage_selectors = new LoginPage_selectors();
const homePage_selectors = new HomePage_selectors();
const header_selectors = new Header_selectors();
const common_page = new Common_page();
const homePage_page = new HomePage_page();

let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });
});

let homePage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/homePage.json").then((homeDataFile) => {
        homePage_data = homeDataFile;
    });
});

let header_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/header.json").then((headerDataFile) => {
        header_data = headerDataFile;
    });
});

let common_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });
});

let registrationPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/registrationPage.json").then((registrationPageDataFile) => {
        registrationPage_data = registrationPageDataFile;
    });
});

When("I navigate to {string} page", (navigateToPage) => {
    switch (navigateToPage) {
        case "Home":
            cy.visit(common_data.URL.homePageURL);
            break;
        case "Login":
            cy.visit(common_data.URL.loginPageURL);
            break;
        case "Vacancies":
            cy.visit(common_data.URL.vacanciesPageURL);
            break;
        case "Registration":
            cy.visit(common_data.URL.registrationPageURL);
            break;
        default:
            throw new Error(`Unknown page name data specified: ${navigateToPage}`);
    }
})

When("I wait for {string} seconds", (waitingTime) => {
    switch (waitingTime) {
        case "2":
            cy.wait(common_data.twoSecond);
            break;
        case "3":
            cy.wait(common_data.threeSecond);
            break;
        case "7":
            cy.wait(common_data.common_data.sevenSecond);
            break;
        default:
            throw new Error(`Unknown time data is specified: ${waitingTime}`);
    }
});

Then("I should see that {string} field on the 'Login' page is displayed", (nameInputField) => {
    switch (nameInputField) {
        case "Email":
            cy.get(loginPage_selectors.emailInputField).should("be.visible");
            break;
        case "Password":
            cy.get(loginPage_selectors.passwordInputField).should("be.visible");
            break;
        default:
            throw new Error(`Unknown field name data specified: ${nameInputField}`);
    }
});