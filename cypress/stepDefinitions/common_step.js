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
    const data = common_page.removeSpaceAndApplyCamelCase(navigateToPage, "", "PageURL");
    switch (navigateToPage) {
        case "Home":
        case "Login":
        case "Vacancies":
        case "Registration":
            cy.visit(common_data.URL[data]);
            break;
        default:
            throw new Error(`Unknown page name data specified: ${navigateToPage}`);
    }
})

Then("I should see that {string} field on the 'Login' page is displayed", (nameInputField) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "InputField");
    switch (nameInputField) {
        case "Email":
        case "Password":
            cy.get(loginPage_selectors[selector]).should("be.visible");
            break;
        default:
            throw new Error(`Unknown field name data specified: ${nameInputField}`);
    }
});

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
