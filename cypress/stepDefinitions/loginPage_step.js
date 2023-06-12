import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";

When("I navigate to 'Login' page", () => {
    cy.visit("https://bloomenty.com/ru/myaccount/login");
  });

Then("I should see that 'Login' page is displayed", () => {
    cy.get(".login").should("be.visible");
  });

  Then ("I should see that 'Login' page URL is correct" , () => {
    cy.url(".login").should('include', '/myaccount/login');
  }); 

  Then("I should see that 'Email' field on the 'Login' page is displayed", () => {
    cy.get("#login_username").should("be.visible");
  });

  Then("I should see that 'Password' field on the 'Login' page is displayed", () => {
    cy.get("#loginPassword").should("be.visible");
  })

  When("I press 'Login' button on the 'Login' page", () => {
    cy.get("#login_form_submit").click();
  });

//   Then("I should see that 'error' message on the 'Login' page is displayed", () => {
//     cy.get(".alert").should("be.visible");
//   });

  When("I fill in the 'Email' field on the 'Login' page with 'edaglidenok.86+86@gmail.com'", () => {
    cy.get("#login_username").type("edaglidenok.86+86@gmail.com");
  })

  When("I fill in the 'Password' field on the 'Login' page with 'test86'", () => {
    cy.get("#loginPassword").type("test86");
  })

  Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(".header-user-image > img").should("be.visible");
  })

  Then("I should see that 'My account' title on the 'My account' page is displayed", () => {
    cy.get(".title-icon > .title").should("be.visible");
  })