import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Footer_selectors from "../selectors/footer_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import Common_page from "../pageObjects/common_page.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const footer_selectors = new Footer_selectors();
const common_selectors = new Common_selectors();

let header_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/header.json").then((headerDataFile) => {
        header_data = headerDataFile;
    });
});

let footer_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/footer.json").then((footerDataFile) => {
        footer_data = footerDataFile;
    });
});


before(() => {
    cy.visit("https://bloomenty.com/nl/home");
    cy.session("cookie", () => {
    });
});

When("I should see that {string} in the footer is displayed", (footerItemMenu) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(footerItemMenu, "footer", "");
    switch (footerItemMenu) {
        case "Bloomenty logo":
        case "Navigation title":
        case "Official docs title":
        case "Bloomenty copyright":
            cy.get(footer_selectors[selector]).should("be.visible");
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemMenu}`);
    }
});

When("I press item {string} in the footer navigation", (footerItemNavigation) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(footerItemNavigation, "footerNavigation", "");
    switch (footerItemNavigation) {
        case "About us":
        case "News":
        case "Blog":
        case "Forum":
        case "Our team":
        case "Contacts":
        case "My account":
        case "News":
        case "Vacancies":
            cy.get(footer_selectors[selector]).click();
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemNavigation}`);
    }
});

When("I press item {string} for official docs in the footer", (footerItemOfficialDocs) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(footerItemOfficialDocs, "footerOfficialDocs", "");
    switch (footerItemOfficialDocs) {
        case "Platform rules":
        case "Privacy policy":
            cy.get(footer_selectors[selector]).click();
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemOfficialDocs}`);
    }
});

When("I should see that {string} on the 'Official docs' page is displayed", (ItemOfficialDocsPage) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(ItemOfficialDocsPage, "title", "OfficialDocsPage");
    switch (ItemOfficialDocsPage) {
        case "Platform rules":
        case "Privacy policy":
            cy.get(common_selectors[selector]).should("be.visible");
            break;
        default:
            throw new Error(`Unknown item name data specified: ${ItemOfficialDocsPage}`);
    }
});




