Feature: Verification of Bloomenty Registration page

  Scenario: Verify fields from the 'Registration' page
    When I navigate to "Registration" page
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that the data for 'Country' dropdown are correct
    Then I should see that Placeholders are correct for Four registration input fields
    And I fill in Six registration input fields

  Scenario: Verify creating 'Unique user' from the 'Registration' page
    When I navigate to "Registration" page
    And I fill in the "Name" field on the 'Registration' page with Unique data
    And I fill in the "Surname" field on the 'Registration' page with Unique data
    And I fill in the "Nickname" field on the 'Registration' page with Unique data
    # And I fill in the "Email" field on the 'Registration' page with Unique data
    # And I fill in the "First password" field on the 'Registration' page with Unique data
    # And I fill in the "Second password" field on the 'Registration' page with Unique data
    # And I accept all registration rules
    # And I press 'Registration' button on the 'Registration' page
    # Then I should see that 'Confirmation' message on the 'Registration' page is displayed
