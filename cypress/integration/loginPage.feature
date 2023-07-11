Feature: Verification of Bloomenty Login page

  Scenario: Verify 'Login' button from the Home page
    When I navigate to 'Home' page
    And I wait for 3 seconds
    And I press 'Cancel' button on the 'Cookies' page
    And I press 'Login' button on the 'Home' page
    Then I should see that 'Login' page is displayed
    And I should see that 'Login' page URL is correct

  Scenario: Verify 'Login' page
    When I navigate to 'Login' page
    And I wait for 3 seconds
    Then I should see that 'Email' field on the 'Login' page is displayed
    And I should see that 'Password' field on the 'Login' page is displayed

  Scenario: Verify 'No symbols before At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols before At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No symbols After At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols after At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No symbols after dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols after dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'One symbols after dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "One symbols after dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No symbols' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "No symbols" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'One dot' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "One dot" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'One symbol' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "One symbol" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'No one symbol' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "No one symbol" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'Upper case symbols' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "Upper case symbols" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Email incorrect' error message

  Scenario: Verify 'Correct' input data for 'Email' and 'Password' fields
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see that avatar on the 'My account' page is displayed
    And I should see that 'My account' title on the 'My account' page is displayed
