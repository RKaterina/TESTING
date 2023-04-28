# Feature: Feature name

#   Scenario: Verify header on he home page
#     When I navigate to Home page
    # Then I should see that 'Bloomenty' icon is present
    # And I should see that 'Services(Diensten)' menu is present
    # And I should see that 'Enter' button is present

Feature: Verification of Bloomenty Home page

  Scenario: Verify 'Cookies' page
    When I navigate to Home page
    Then I should see 'Cookies' page
    And I should see 'your flower community' icon
    And I should see 'Uw cookievoorkeuren' page header
    And I should see 'Cookies' rules
    And I should see 'Accept' button
    And I should see 'Not Accept' button
    And I click 'Accept' button