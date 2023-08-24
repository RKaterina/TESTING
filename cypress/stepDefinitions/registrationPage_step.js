import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import Header_selectors from "../selectors/header_selectors.js";
import Registration_selectors from "../selectors/registrationPage_selectors.js";

const loginPage_selectors = new LoginPage_selectors();
const common_page = new Common_page();
const header_selectors = new Header_selectors();
const registration_selectors = new Registration_selectors();

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

            common_page.typeDataForInputField(registration_selectors[selector], registrationPage_data.registrationData.correctData[data][rnd]);
            break;
        default:
            throw new Error(`Unknown field name data specified: ${nameInputFieldRegistration}`);
    }

})


