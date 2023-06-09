Feature: Verification of Bloomenty Login page

  Scenario: Verify 'Cookie page' link Via 'checking href'
    When I press 'Back' button in the Browser
    And I refresh the page
    And I wait for 3 seconds
    Then I should see that 'CookiesPage' link is correct
