import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";
import Common_page from "../pageObjects/common_page.js";
import HomePage_selectors from "../selectors/homePage_selectors.js";


const homePagePage = new HomePagePage();
const common_page = new Common_page();
const homePage_selectors = new HomePage_selectors();



let homePage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/homePage.json").then((homeDataFile) => {
        homePage_data = homeDataFile;
    });

    cy.visit("https://bloomenty.com/nl/home");
    cy.session("cookie", () => {
    });
});


When("I should see that 'Cookies' page is {string}", (visibility) => {
    switch (visibility) {
        case "Displayed":
            homePagePage.checkCookiesPageVisibility(true);
            break;
        case "Not displayed":
            homePagePage.checkCookiesPageVisibility(false);
            break;
        default:
            throw new Error(`Unknown status visibility specified: ${visibility}`);
    }

});

When("I should see that 'Cookies rules' is opened", () => {
    cy.get(homePage_selectors.cookiesRulesSection).should("be.visible")
});

When("I select 'Cookie page' link on the 'Cookies' page", () => {
    cy.get(homePage_selectors.cookiesPageLink).invoke('removeAttr', 'target').click();
});

When("I clear all Cookies", () => {
    cy.clearCookies();
});

When("I refresh the page", () => {
    cy.reload();
});

When("I press {string} button in the Browser", (browserButton) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(browserButton, "browser", "Button");

    cy.log("Наш селектор = " + selector)

    switch (browserButton) {
        case "Back":
        case "Forward":
            cy.go(homePage_selectors[selector]);
            break;
        default:
            throw new Error(`Unknown button name data specified: ${browserButton}`);
    }
});

Then("I should see that 'CookiesPage' link is correct", () => {
    cy.get(homePage_selectors.cookiesPageLink).should("have.attr", "href", "/nl/official-docs#cookie-files")
});

When("I should see correct 'Online platform' page header", () => {
    cy.get(homePage_selectors.homePageContainer).should("contain", homePage_data.onlinePlatformPageHeader);
});

When("I press {string} button on the 'Cookies' page", (buttonName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(buttonName, "", "ButtonCookiesPage");

    cy.log("Наш селектор = " + selector)

    switch (buttonName) {
        case "Cancel":
        case "Accept":
            cy.get(homePage_selectors[selector]).click();
            break;
        default:
            throw new Error(`Unknown button name data specified: ${buttonName}`);
    }

});