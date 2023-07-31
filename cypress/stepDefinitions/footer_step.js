import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Footer_selectors from "../selectors/footer_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";


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
    switch (footerItemMenu) {
        case "Bloomenty logo":
            cy.get(footer_selectors.footerLogo).should("be.visible");
            break;
        case "Navigation title":
            cy.get(footer_selectors.footerTitleNavigation).should("be.visible");
            break;
        case "Official docs title":
            cy.get(footer_selectors.footerTitleOfficialDocs).should("be.visible");
            break;
        case "Bloomenty copyright":
            cy.get(footer_selectors.footerCopyright).should("be.visible");
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemMenu}`);
    }
});

When("I press item {string} in the footer navigation", (footerItemNavigation) => {
    switch (footerItemNavigation) {
        case "About us":
            cy.get(footer_selectors.footerNavigationAboutUs).click();
            break;
        case "News":
            cy.get(footer_selectors.footerNavigationNews).click();
            break;
        case "Blog":
            cy.get(footer_selectors.footerNavigationBlog).click();
            break;
        case "Forum":
            cy.get(footer_selectors.footerNavigationForum).click();
            break;
        case "Our team":
            cy.get(footer_selectors.footerNavigationOurTeam).click();
            break;
        case "Contacts":
            cy.get(footer_selectors.footerNavigationContacts).click();
            break;
        case "My account":
            cy.get(footer_selectors.footerNavigationMyAccount).click();
            break;
        case "News":
            cy.get(footer_selectors.footerNavigationNews).click();
            break;
        case "Vacancies":
            cy.get(footer_selectors.footerNavigationVacancies).click();
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemNavigation}`);
    }
});

When("I press item {string} for official docs in the footer", (footerItemOfficialDocs) => {
    switch (footerItemOfficialDocs) {
        case "Platform rules":
            cy.get(footer_selectors.footerOfficialDocsPlatformRules).click();
            break;
        case "Pravicy policy":
            cy.get(footer_selectors.footerOfficialDocsPrivacyPolicy).click();
            break;
        default:
            throw new Error(`Unknown item name data specified: ${footerItemOfficialDocs}`);
    }
});

When("I should see that {string} on the 'Official docs' page is displayed", (ItemOfficialDocsPage) => {
    switch (ItemOfficialDocsPage) {
        case "Platform rules":
            cy.get(common_selectors.titlePlatformRulesOfficialDocsPage).should("be.visible");
            break;
        case "Pravicy policy":
            cy.get(common_selectors.titlePravicyPolicyOfficialDocsPage).should("be.visible");
            break;
        
        default:
            throw new Error(`Unknown item name data specified: ${ItemOfficialDocsPage}`);
    }
});




