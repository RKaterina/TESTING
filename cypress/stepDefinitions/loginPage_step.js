import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import Header_selectors from "../selectors/header_selectors.js";

const loginPage_selectors = new LoginPage_selectors();
const common_page = new Common_page();
const header_selectors = new Header_selectors();

let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });
});

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible");
});

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include', loginPage_data.URLs.myAccountURL);
});

When("I press 'Submit' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.submitButton).click();
});

Then("I should not see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("not.be.visible");

})

Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(".header-user-image > img").should("be.visible");
})

Then("I should see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("be.visible");
})


When("I fill in the 'Email' field on the 'Login' page with {string} data", (emailInputData) => {
    const data = common_page.removeSpaceAndApplyCamelCase(emailInputData, "", "");
    switch (emailInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailCorrectData);
            break;
        case "No symbols before At":
        case "No symbols after At":
        case "No symbols after dot":
        case "No dot":
        case "No At":
        case "One symbol after dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.incorrectEmailData[data]);
            break;
        default:
            throw new Error(`Unknown email data is specified: ${emailInputData}`);
    }
})

When("I fill in the 'Password' field on the 'Login' page with {string} data", (passwordInputData) => {
    const data = common_page.removeSpaceAndApplyCamelCase(passwordInputData, "", "");
    switch (passwordInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordCorrectData);
            break;
        case "One dot":
        case "No symbols":
        case "One symbol":
        case "No one symbol":
        case "Upper case symbols":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.incorrectPasswordData[data]);
            break;
        default:
            throw new Error(`Unknown password data is specified: ${passwordInputData}`);
    }
})

