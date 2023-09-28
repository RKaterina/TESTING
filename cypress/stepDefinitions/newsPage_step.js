import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import NewsPage_selectors from "../selectors/newsPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();
const newsPage_selectors = new NewsPage_selectors();

let common_data; // Used us a link to the fixtures data
let newsPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });

    cy.fixture("/newsPage.json").then((newsPageDataFile) => {
        newsPage_data = newsPageDataFile;
    });
});



