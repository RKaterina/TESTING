import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";

const loginPage_selectors = new LoginPage_selectors();

let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });
});

When("I navigate to 'Login' page", () => {
    cy.visit("https://bloomenty.com/nl/myaccount/login");
});

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible");
});

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include', loginPage_data.URLs.myAccountURL);
});

Then("I should see that 'Email' field on the 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.emailInputField).should("be.visible");
});

Then("I should see that 'Password' field on the 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.passwordInputField).should("be.visible");
})

When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.submitButton).click();
});

Then("I should not see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("not.be.visible");

})

Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(".header-user-image > img").should("be.visible");
})

Then("I should see that 'My account' title on the 'My account' page is displayed", () => {
    cy.get(".title-icon > .title").should("be.visible");
})

Then("I should see 'Email incorrect' error message", () => {
    cy.get(loginPage_selectors.emailIncorrectErrorMessage).should("be.visible");
})


When("I fill in the 'Email' field on the 'Login' page with {string} data", (emailInputData) => {
    switch (emailInputData) {
        case "Correct":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailCorrectData);
            break;
        case "No symbols before At":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsBeforeAt);
            break;
        case "No symbols after At":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsAfterAt);
            break;
        case "No symbols after dot":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsAfterDot);
            break;
        case "No dot":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noDot);
            break;
        case "No At":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noAt);
            break;
        case "One symbol after dot":
            cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.oneSymbolAfterDot);
            break;
        default:
            throw new Error(`Unknown email data is specified: ${emailInputData}`);
    }
})

When("I fill in the 'Password' field on the 'Login' page with {string} data", (passwordInputData) => {
    switch (passwordInputData) {
        case "Correct":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordCorrectData);
            break;
        case "No symbols":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.noSymbols);
            break;
        case "One dot":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.oneDot);
            break;
        case "One symbol":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.oneSymbol);
            break;
        case "No one symbol":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.noOneSymbol);
            break;
        case "Upper case symbols":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.upperCaseSymbols);
            break;
        default:
            throw new Error(`Unknown password data is specified: ${passwordInputData}`);
    }
})

