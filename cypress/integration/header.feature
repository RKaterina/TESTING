Feature: Verification for 'Header' item

  Scenario: Verify 'Bloomenty' logo is displayed
    When I navigate to 'Home' page
    And I wait for 3 seconds
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that 'Bloomenty' logo is displayed

  

  