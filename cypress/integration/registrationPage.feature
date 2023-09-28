Feature: Verification of Bloomenty Registration page

  Scenario: Verify 'Nickname' field from the Registration page
    Given I navigate to "Home" page
    And I wait for "3" seconds
    And I press 'Accept' button on the 'Cookies' page
    When I navigate to "Registration" page
    And I fill in the "Nickname" field on the 'Registration' page with Correct data

  Scenario: Verify 'Name' field from the Registration page
    When I fill in the "Name" field on the 'Registration' page with Correct data

  Scenario: Verify 'Surname' field from the Registration page
    When I fill in the "Surname" field on the 'Registration' page with Correct data

  Scenario: Verify that input fields work correctly
    When I navigate to "Registration" page
    Then I should see that Placeholders are correct for Four registration input fields
    And I fill in Six registration input fields
    And I accept all registration rules

  Scenario: Verify that the data for 'Country' dropdown are correct
    When I navigate to "Registration" page
    Then I should see that the data for 'Country' dropdown are correct
