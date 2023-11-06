import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import NewsPage_selectors from "../selectors/newsPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import LoginPage_selectors from "../selectors/loginPage_selectors.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();
const newsPage_selectors = new NewsPage_selectors();
const loginPage_selectors = new LoginPage_selectors();

let common_data; // Used us a link to the fixtures data
let newsPage_data; // Used us a link to the fixtures data
let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });

    cy.fixture("/newsPage.json").then((newsPageDataFile) => {
        newsPage_data = newsPageDataFile;
    });

    cy.fixture("/loginPage.json").then((loginPageDataFile) => {
        loginPage_data = loginPageDataFile;
    });
});

When("I fill in the 'Email' field 'Kate' data on the 'News' page", () => {
    common_page.typeDataForInputField(newsPage_selectors.emailInputField, newsPage_data.kateData);
});

When("I fill in the 'Email' field 'Test' data on the 'News' page", () => {
    cy.get(newsPage_selectors.emailInputField).type(newsPage_data.testData);
});

When("I fill in the 'Email' field 'Email' correct data on the 'News' page", () => {
    cy.get(newsPage_selectors.emailInputField).type(loginPage_data.correctData.emailCorrectData);
});

Then("I should see that notification on the 'News' page is displayed", () => {
    cy.get(newsPage_selectors.notificationMessage).should("be.visible");
});

Then("I should see that 'Email' field contain 'KatTest' data", () => {
    cy.get(newsPage_selectors.emailInputField).should("have.value", "KatTest");
});


