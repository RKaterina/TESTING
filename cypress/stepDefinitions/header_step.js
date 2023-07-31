import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";


const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();

let header_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/header.json").then((headerDataFile) => {
        header_data = headerDataFile;
    });
});


before(() => {
    cy.visit("https://bloomenty.com/nl/home");
    cy.session("cookie", () => {
    });
});

When("I should see that {string} on the header is displayed", (headerItemMenu) => {
    switch (headerItemMenu) {
        case "Bloomenty logo":
            cy.get(header_selectors.headerLogo).should("be.visible");
            break;
        case "Services menu":
            cy.get(header_selectors.headerServicesMenu).should("be.visible");
            break;
        case "Encyclopedia menu":
            cy.get(header_selectors.headerEncyclopediaMenu).should("be.visible");
            break;
        case "Forum menu":
            cy.get(header_selectors.headerForumMenu).should("be.visible");
            break;
        case "About us menu":
            cy.get(header_selectors.headerAboutUsMenu).should("be.visible");
            break;
        case "Active languaage menu":
            cy.get(header_selectors.headerActiveLanguage).should("be.visible");
            break;
        default:
            throw new Error(`Unknown item name data specified: ${headerItemMenu}`);
    }
});

When("I press 'Logout' button in the header", () => {
    cy.get(header_selectors.headerLogoutButton).click({ force: true });
});

When("I press item {string} for 'Services' header menu", (headerItemSubMenu) => {
    switch (headerItemSubMenu) {
        case "Vacancies":
            cy.get(header_selectors.headerServicesVacanciesSubMenu).click({ force: true });
            break;
        case "TravelClub":
            cy.get(header_selectors.headerServicesTravelClubSubMenu).click({ force: true });
            break;
        case "News":
            cy.get(header_selectors.headerServicesNewsSubMenu).click({ force: true });
            break;
        case "Blog":
            cy.get(header_selectors.headerServicesBlogSubMenu).click({ force: true });
            break;
        default:
            throw new Error(`Unknown item name data specified: ${headerItemSubMenu}`);
    }
});

When("I should see that {string} title on the {string} page is displayed", (titleOfThePage) => {
    switch (titleOfThePage) {
        case "Vacancies":
            cy.get(common_selectors.titleVacanciesPage).should("be.visible");
            break;
        case "News":
            cy.get(common_selectors.titleNewsPage).should("be.visible");
            break;
        case "Blog":
            cy.get(common_selectors.titleBlogPage).should("be.visible");
            break;
        case "My account":
            cy.get(common_selectors.titleMyAccountPage).should("be.visible");
            break;
        case "About us":
            cy.get(common_selectors.titleAboutUsPage).should("be.visible");
            break;
        case "Forum":
            cy.get(common_selectors.titleForumPage).should("be.visible");
            break;
        case "Our team":
            cy.get(common_selectors.titleOurTeamPage).should("be.visible");
            break;
        case "Contacts":
            cy.get(common_selectors.titleContactsPage).should("be.visible");
            break;
        default:
            throw new Error(`Unknown item name data specified: ${titleOfThePage}`);
    }
});



