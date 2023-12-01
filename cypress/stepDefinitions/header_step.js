import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import Common_page from "../pageObjects/common_page.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();

let header_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/header.json").then((headerDataFile) => {
        header_data = headerDataFile;
    });

});

When("I should see that 'Bloomenty logo' on the header is displayed", () => {
    cy.get(header_selectors.headerLogo).should("be.visible");
});

When("I should see that {string} menu on the header is displayed", (headerItemMenu) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(headerItemMenu, "header", "Menu");
    // switch (headerItemMenu) {
    //     case "Services":
    //     case "Encyclopedia":
    //     case "Forum":
    //     case "About us":
    //     case "Active language":
    cy.get(header_selectors[selector]).should("be.visible");
    //         break;
    //     default:
    //         throw new Error(`Unknown item name data specified: ${headerItemMenu}`);
    // }
});

When("I press item {string} for 'Services' header menu", (headerItemSubMenu) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(headerItemSubMenu, "headerServices", "SubMenu");
    // switch (headerItemSubMenu) {
    //     case "Vacancies":
    //     case "TravelClub":
    //     case "News":
    //     case "Blog":
    cy.get(header_selectors[selector]).click({ force: true });
    //         break;
    //     default:
    //         throw new Error(`Unknown item name data specified: ${headerItemSubMenu}`);
    // }
});

When("I should see that {string} title on the {string} page is displayed", (titleOfThePage) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(titleOfThePage, "title", "Page");
    // switch (titleOfThePage) {
    //     case "Vacancies":
    //     case "News":
    //     case "Blog":
    //     case "My account":
    //     case "About us":
    //     case "Forum":
    //     case "Our team":
    //     case "Contacts":
    cy.get(common_selectors[selector]).should("be.visible");
    //         break;
    //     default:
    //         throw new Error(`Unknown item name data specified: ${titleOfThePage}`);
    // }
});

When("I press {string} button on the header", (headerButtonName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(headerButtonName, "header", "Button");
    // switch (headerButtonName) {
    //     case "Login":
    //     case "Logout":
    cy.get(header_selectors[selector]).click({ force: true });
    //         break;
    //     default:
            // throw new Error(`Unknown button name data specified: ${headerButtonName}`);
    // }

});
