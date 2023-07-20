import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";


const header_selectors = new Header_selectors();

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

When("I should see that 'Bloomenty' logo is displayed", () => {
    cy.get(header_selectors.headerLogo).should("be.visible");
});


