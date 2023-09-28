import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import BlogPage_selectors from "../selectors/blogPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();
const blogPage_selectors = new BlogPage_selectors();

let common_data; // Used us a link to the fixtures data
let blogPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });

    cy.fixture("/blogPage.json").then((blogPageDataFile) => {
        blogPage_data = blogPageDataFile;
    });

});


