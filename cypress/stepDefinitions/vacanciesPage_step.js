import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import Header_selectors from "../selectors/header_selectors.js";
import Common_selectors from "../selectors/common_selectors.js";
import VacanciesPage_selectors from "../selectors/vacanciesPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";


const common_page = new Common_page();
const header_selectors = new Header_selectors();
const common_selectors = new Common_selectors();
const vacanciesPage_selectors = new VacanciesPage_selectors();

let common_data; // Used us a link to the fixtures data
let vacanciesPage_data; // Used us a link to the fixtures data

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });

    cy.fixture("/vacanciesPage.json").then((vacanciesPageDataFile) => {
        vacanciesPage_data = vacanciesPageDataFile;
    });
});


When("I should see that 'Vacancies' icon on the 'Vacancies' page is displayed", () => {
    cy.get(vacanciesPage_selectors.iconVacanciesPage).should("be.visible");
});

When("I select first item in the 'All countries' dropdown 'Vacancies' page", () => {
    cy.get(vacanciesPage_selectors.firstItemAllCountriesDropdown).click();
});

When("I should see that {string} dropdown on the 'Vacancies' page is displayed", (nameDropdown) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameDropdown, "", "Dropdown");
    // switch (nameDropdown) {
    //     case "All vacancies":
    //     case "All countries":
    //     case "All cities":
    cy.get(vacanciesPage_selectors[selector]).should("be.visible");
    //         break;
    //     default:
    //         throw new Error(`Unknown item name data specified: ${nameDropdown}`);
    // }
});

When("I press {string} dropdown on the 'Vacancies' page", (vacanciesDropdownClick) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(vacanciesDropdownClick, "", "Dropdown");
    // switch (vacanciesDropdownClick) {
    //     case "All vacancies":
    //     case "All countries":
    //     case "All cities":
    cy.get(vacanciesPage_selectors[selector]).click();
    //         break;
    //     default:
    //         throw new Error(`Unknown dropdown name data specified: ${vacanciesDropdownClick}`);
    // }
});

When("I select {string} item in the 'All vacancies' dropdown 'Vacancies' page", (selectVacancies) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(selectVacancies, "", "ItemAllVacanciesVacanciesPage");
    // switch (selectVacancies) {
    //     case "Florist":
    //     case "Greenhouse worker":
    //     case "Wedding coordinator Freelance":
    cy.get(vacanciesPage_selectors[selector]).click();
    //         break;
    //     default:
    //         throw new Error(`Unknown item dropdown specified: ${selectVacancies}`);
    // }
});

When("I should see that {string} item top 'Vacancies' on the 'Vacancies' page is displayed", (itemTopVacanciesVisible) => {
    const data = common_page.removeSpaceAndApplyCamelCase(itemTopVacanciesVisible, "item", "TopVacancies");
    // switch (itemTopVacanciesVisible) {
    //     case "Florist":
    //     case "Greenhouse worker":
    //     case "Wedding coordinator Freelance":
    cy.get(vacanciesPage_selectors.itemTopVacanciesPage).should("contain", vacanciesPage_data[data]);
    //         break;
    //     default:
    //         throw new Error(`Unknow item top Vacancies specified: ${itemTopVacanciesVisible}`);
    // }
});

When("I select {string} item in the 'All countries' dropdown 'Vacancies' page", (selectCountries) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(selectCountries, "", "ItemAllCountriesVacanciesPage");
    // switch (selectCountries) {
    //     case "Nederland":
    //     case "Polen":
    //     case "Italië":
    cy.get(vacanciesPage_selectors[selector]).click();
    //         break;
    //     default:
    //         throw new Error(`Unknow item dropdown specified: ${selectCountries}`);
    // }
});

When("I should see that {string} item dropdown 'All countries' on the 'Vacancies' page is displayed", (itemTopCountriesVisible) => {
    const data = common_page.removeSpaceAndApplyCamelCase(itemTopCountriesVisible, "", "ItemAllCountriesVacanciesPage");
    switch (itemTopCountriesVisible) {
        case "Nederland":
        case "Polen":
        case "Italië":
            cy.get(vacanciesPage_selectors.activeItemAllCountriesDropdownVacanciesPage).should("contain", vacanciesPage_data[data]);
            break;
        default:
            throw new Error(`Unknow item top Vacancies specified: ${itemTopCountriesVisible}`);
    }
});

When("I select {string} item in the 'All cities' dropdown 'Vacancies' page", (selectCities) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(selectCities, "", "ItemAllCitiesVacanciesPage");
    switch (selectCities) {
        case "Aalsmeer":
        case "Gdańsk":
        case "Milano":
            cy.get(vacanciesPage_selectors[selector]).click();
            break;
        default:
            throw new Error(`Unknow item dropdown specified: ${selectCities}`);
    }
});

When("I should see that {string} item dropdown 'All cities' on the 'Vacancies' page is displayed", (itemTopCitiesVisible) => {
    const data = common_page.removeSpaceAndApplyCamelCase(itemTopCitiesVisible, "", "ItemAllCitiesVacanciesPage");
    switch (itemTopCitiesVisible) {
        case "Aalsmeer":
        case "Gdańsk":
        case "Milano":
            cy.get(vacanciesPage_selectors.itemTopCitiesVacanciesPage).should("contain", vacanciesPage_data[data]);
            break;
        default:
            throw new Error(`Unknow item top Vacancies specified: ${itemTopCitiesVisible}`);
    }
});

When("I press 'Learn more' button on the 'Vacancies' page", () => {
    cy.get(vacanciesPage_selectors.learnMoreButton).click();
});

When("I should see that 'Aplly for vacancies' item is displayed", () => {
    cy.get(vacanciesPage_selectors.ApplyForVacancies).should("be.visible");
});

Then("I should see that the data for 'Vacancies' dropdown are correct", () => {

    for (let i = 0; i < vacanciesPage_data.dropdownsData.vacanciesList.length; i++) {

        const dropdownData = vacanciesPage_data.dropdownsData.vacanciesList[i];

        cy.get(vacanciesPage_selectors.allVacanciesDropdown).contains(dropdownData);

    }
});

Then("I should see that the data for 'Countries' dropdown are correct", () => {

    for (let i = 0; i < vacanciesPage_data.dropdownsData.countriesList.length; i++) {

        const dropdownData = vacanciesPage_data.dropdownsData.countriesList[i];

        cy.get(vacanciesPage_selectors.allCountriesDropdown).contains(dropdownData);

    }
});

Then("I should see that the data for 'Cities' dropdown are correct", () => {

    for (let i = 0; i < vacanciesPage_data.dropdownsData.citiesList.length; i++) {

        const dropdownData = vacanciesPage_data.dropdownsData.citiesList[i];

        cy.get(vacanciesPage_selectors.allCitiesDropdown).contains(dropdownData);

    }
});
