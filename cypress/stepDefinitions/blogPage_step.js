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

When("I select {string} section", (sectionName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(sectionName, "", "Section");

    cy.get(blogPage_selectors[selector]).click({force: true});     
});

When("I press 'Read' button for {string} article on the 'All article' page", (articleNumber) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(articleNumber, "readButtonFor", "Article");

    cy.get(blogPage_selectors[selector]).click();
});

When("I press 'Read' button for article #{string} on the 'All article' page", (buttonArticleNumber) => {
    const selector = blogPage_selectors.articleNumberButtonFirstPath + `${buttonArticleNumber - 1}` + blogPage_selectors.articleNumberButtonSecondPath

    cy.get(selector).click();
});

When("I copy header for the {string} article for 'Article List' page", (articleNumber) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(articleNumber, "", "ItemSearchResult");

    cy.get(blogPage_selectors[selector]).invoke("text")
        .then((headerText) => {
            Cypress.env("articleHeader", headerText);

            cy.log(
                `Saved Header fo the first article is ${Cypress.env("articleHeader")}` + `; invoked text: ${headerText}`
            );
        });
});


When("I copy header for the article #{string} on the 'Article List' page", (articleNumber) => {
    let selector = blogPage_selectors.articleNumberFirstPath + `${articleNumber - 1}` + blogPage_selectors.articleNumberSecondPath

    cy.get(selector).invoke("text")
        .then((headerText) => {
            Cypress.env("articleHeader", headerText);

            cy.log(`Saved Header for the article is ${Cypress.env("articleHeader")}`);
        });
});


When("I copy header for the {string} article on the 'Article List' page", (articleNumber) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(articleNumber, "", "ItemSearchResult");
    const envName = common_page.removeSpaceAndApplyCamelCase(articleNumber, "", "ArticleHeader");

    cy.get(blogPage_selectors[selector]).invoke("text")
        .then((headerText) => {
            Cypress.env(envName, headerText);

            cy.log(
                `Saved Header fo the first article is ${Cypress.env(envName)}`
            );
        });
});


When("I should see that article header is the same as on the 'One article' page", () => {
    cy.get(blogPage_selectors.titleOneArticle).should("contain.text", Cypress.env("articleHeader"));
});

When("I should see that {string} article header is the same as for 'One article' page", (articleSerialNumber) => {
    const envName = common_page.removeSpaceAndApplyCamelCase(articleSerialNumber, "", "ArticleHeader");

    cy.log(`Saved Header fo the first article is ${Cypress.env(envName) }`);

    cy.get(blogPage_selectors.titleOneArticle).should("contain.text", Cypress.env(envName));
});

// When("I should see that {string} article header is the same as for 'One article' page", (articleSerialNumber) => {
//     const envName = common_page.removeSpaceAndApplyCamelCase(articleSerialNumber, "", "ArticleHeader");

//     cy.log(`Saved Header fo the first article is ${Cypress.env(envName)}`);

//     cy.get(blogPage_selectors.titleOneArticle).contains(Cypress.env(envName));
// });

// should("contain.text") может работать и как contains(переменная)
