import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import Common_page from "../pageObjects/common_page.js";
import FarmerForm_selectors from "../selectors/farmerForm_selectors.js";


const common_page = new Common_page();
const farmerForm_selectors = new FarmerForm_selectors();

let farmerForm_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/farmerForm.json").then((farmerFormDataFile) => {
        farmerForm_data = farmerFormDataFile;
    });

});


When("I click {string} radiobutton for {string} section", (radioButtonName, sectionName) => {
    switch (sectionName) {
        case "Supply":
            switch (radioButtonName) {
                case "Yes":
                    cy.get(farmerForm_selectors.jaRBSupply).click();
                    break;
                case "No":
                    cy.get(farmerForm_selectors.neeRBSupply).click();
                    break;
            }
            break;
        case "Sales market":
            switch (radioButtonName) {
                case "Yes":
                    cy.get(farmerForm_selectors.jaRBSalesMarket).click();
                    break;
                case "No":
                    cy.get(farmerForm_selectors.neeRBSalesMarket).click();
                    break;
            }
            break;
        case "Become blogger":
            switch (radioButtonName) {
                case "Yes":
                    cy.get(farmerForm_selectors.jaRBBecomeBlogger).click();
                    break;
                case "No":
                    cy.get(farmerForm_selectors.neeRBBecomeBlogger).click();
                    break;
            }
            break;
        default:
            throw new Error(`Unknown section name is specified: ${sectionName}`);
    }
});

// When("I click {string} for 'Country' radiobutton", (radioButtonName) => {
//     const selector = common_page.removeSpaceAndApplyCamelCase(radioButtonName, "", "RadioButton");
//     cy.get(farmerForm_selectors[selector]).click();
// });

When("I should see that {string} element is {string} for 'Farmer' form", (inputFieldName, statusPage) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(inputFieldName, "", "FarmerForm");
    const status = common_page.removeSpaceAndApplyCamelCase(statusPage, "", "Status");
    cy.get(farmerForm_selectors[selector]).should(farmerForm_data[status], "disabled")
});

// When("I should see that {string} element is {string} for 'Farmer' form", (inputFieldName, statusPage) => {
//     const selector = common_page.removeSpaceAndApplyCamelCase(inputFieldName, "", "FarmerForm");
//     switch (statusPage) {
//         case "Disabled":
//             cy.get(farmerForm_selectors[selector]).should("have.attr", "disabled");
//             break;
//         case "Enabled":
//             cy.get(farmerForm_selectors[selector]).should("not.have.attr", "disabled")
//             break;
//         default:
//             throw new Error(`Unknown section name is specified: ${statusPage}`);
//     }
// });