import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import Header_selectors from "../selectors/header_selectors.js";
import RegistrationPage_selectors from "../selectors/registrationPage_selectors.js";

const loginPage_selectors = new LoginPage_selectors();
const common_page = new Common_page();
const header_selectors = new Header_selectors();
const registrationPage_selectors = new RegistrationPage_selectors();

let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });
});

let registrationPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/registrationPage.json").then((registrationDataFile) => {
        registrationPage_data = registrationDataFile;
    });
});

When("I fill in the {string} field on the 'Registration' page with Correct data", (nameInputFieldRegistration) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputFieldRegistration, "", "InputField");
    const data = common_page.removeSpaceAndApplyCamelCase(nameInputFieldRegistration, "", "Data");

    cy.log("Наш селектор = " + selector + "; Наши данные Json = " + data)

    switch (nameInputFieldRegistration) {
        case "Nickname":
        case "Name":
        case "Surname":
            var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.registrationData.correctData[data]);

            cy.log("index rnd = " + rnd + "; value rnd = " + registrationPage_data.registrationData.correctData[data][rnd])

            common_page.typeDataForInputField(registrationPage_selectors[selector], registrationPage_data.registrationData.correctData[data][rnd]);
            break;
        default:
            throw new Error(`Unknown field name data specified: ${nameInputFieldRegistration}`);
    }

});

When("I should see that Placeholders are correct for Four registration input fields", () => {

    for (let i = 0; i < registrationPage_data.placeholdersData.placeholdersInputFields.length; i++) {

        const selector = registrationPage_data.placeholdersData.placeholdersSelectors[i];
        const placeholder = registrationPage_data.placeholdersData.placeholdersInputFields[i];

        cy.log("Index i = " + i);
        cy.log("Selector Name = " + selector);
        cy.log("Expected Placeholder = " + placeholder);


        cy.get(registrationPage_selectors[selector]).should("have.attr", "placeholder")
            .and("equal", placeholder);
    }
});

Then("I fill in Six registration input fields", () => {

    for (let i = 0; i < registrationPage_data.placeholdersData.placeholdersSelectors.length; i++) {

        const selector = registrationPage_data.placeholdersData.placeholdersSelectors[i];
        const inputData = registrationPage_data.placeholdersData.registrationInputData[i];

        cy.log("Index i = " + i);
        cy.log("Selector Name = " + selector);
        cy.log("Input Data = " + inputData);

        common_page.typeDataForInputField(registrationPage_selectors[selector], inputData);

    }
});

Then("I accept all registration rules", () => {

    for (let i = 0; i < registrationPage_data.placeholdersData.registrationCheckboxes.length; i++) {

        const selector = registrationPage_data.placeholdersData.registrationCheckboxes[i];

        cy.log("Index i = " + i);
        cy.log("Selector Name = " + selector);

        cy.get(registrationPage_selectors[selector]).click();
    }
});