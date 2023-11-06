import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import HomePage_selectors from "../selectors/homePage_selectors.js";
import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import NewsPage_selectors from "../selectors/newsPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";
import HomePage_page from "../pageObjects/homePage_page.js";

const loginPage_selectors = new LoginPage_selectors();
const homePage_selectors = new HomePage_selectors();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();
const newsPage_selectors = new NewsPage_selectors();
const common_page = new Common_page();
const homePage_page = new HomePage_page();


let loginPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });

    cy.session("cookie", () => {
    });

});

let homePage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/homePage.json").then((homeDataFile) => {
        homePage_data = homeDataFile;
    });

    cy.fixture("/header.json").then((headerDataFile) => {
        header_data = headerDataFile;
    });

    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });

    cy.fixture("/registrationPage.json").then((registrationPageDataFile) => {
        registrationPage_data = registrationPageDataFile;
    });
});

let header_data; // Used us a link to the fixtures data
let common_data; // Used us a link to the fixtures data
let registrationPage_data; // Used us a link to the fixtures data


When("I navigate to {string} page", (navigateToPage) => {
    const data = common_page.removeSpaceAndApplyCamelCase(navigateToPage, "", "PageURL");

    cy.log("Наши данные Json = " + data)

    switch (navigateToPage) {
        case "Home":
        case "Login":
        case "Vacancies":
        case "Registration":
        case "Blog":
        case "News":
        case "Farmer form":
            cy.visit(common_data.URL[data]);
            break;
        default:
            throw new Error(`Unknown page name data specified: ${navigateToPage}`);
    }
})

Then("I should see that {string} field on the 'Login' page is displayed", (nameInputField) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "InputField");

    cy.log("Наш селектор = " + selector)

    switch (nameInputField) {
        case "Email":
        case "Password":
            cy.get(loginPage_selectors[selector]).should("be.visible");
            break;
        default:
            throw new Error(`Unknown field name data specified: ${nameInputField}`);
    }
});

// When("I wait for {string} seconds", (waitingTime) => {
//     switch (waitingTime) {
//         case "2":
//             cy.wait(common_data.twoSecond);
//             break;
//         case "3":
//             cy.wait(common_data.threeSecond);
//             break;
//         case "7":
//             cy.wait(common_data.common_data.sevenSecond);
//             break;
//         default:
//             throw new Error(`Unknown time data is specified: ${waitingTime}`);
//     }
// });

When("I wait for {string} seconds", (timeFrame) => {
    let time = timeFrame * 1000;
    cy.wait(time);

});

When("I should see that BreadCrumb is {string} for the {string} page", (presence, pageName) => {
    const dataPageName = common_page.removeSpaceAndApplyCamelCase(pageName, "page", "");
    switch (presence) {
        case "Displayed":
            cy.get(common_selectors.breadcrumbPage).should("be.visible").should("contain", common_data.pageName[dataPageName])
            break;
        case "Not displayed":
            cy.get(common_selectors.breadcrumbPage).should("not.exist");
            break;
        default:
            throw new Error(`Unknown presence status is specified: ${presence}`);
    }
});

When("I press {string} key for {string} field on the {string} page", (nameKeyData, nameInputField, pageName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "InputField")
    const nameKey = common_page.removeSpaceAndApplyCamelCase(nameKeyData, "", "Key")

    switch (pageName) {
        case "Login":
            cy.get(loginPage_selectors[selector]).type(common_data[nameKey]);
            break;
        case "News":
            cy.get(newsPage_selectors[selector]).type(common_data[nameKey]);
            break;
        default:
            throw new Error(`Unknown page name is specified: ${pageName}`);
    }
});

When("I move cursor to the {string} for {string} field on the {string} page", (directionName, nameInputField, pageName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "InputField")
    const direction = common_page.removeSpaceAndApplyCamelCase(directionName, "", "ArrowKey")
    switch (pageName) {
        case "Login":
            cy.get(loginPage_selectors[selector]).type(common_data[direction]);
            break;
        case "News":
            cy.get(newsPage_selectors[selector]).type(common_data[direction]);
            break;
        default:
            throw new Error(`Unknown direction name is specified: ${directionName}`);
    }
});