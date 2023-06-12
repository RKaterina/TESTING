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

#  Scenario: Verify 'Login' button from the 'Login' page
#     When I press 'Login' button on the 'Login' page
#     And I wait for 3 seconds
#     Then I should see that 'error' message on the 'Login' page is displayed


Scenario: Verify 'Login' button from the 'Login' page
    When I fill in the 'Email' field on the 'Login' page with 'edaglidenok.86+86@gmail.com'
    And  I fill in the 'Password' field on the 'Login' page with 'test86'
    And I press 'Login' button on the 'Login' page
    Then I should see that avatar on the 'My account' page is displayed
    And I should see that 'My account' title on the 'My account' page is displayed
