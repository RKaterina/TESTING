# Feature: Feature name

#   Scenario: Verify header on he home page
#     When I navigate to Home page
    # Then I should see that 'Bloomenty' icon is present
    # And I should see that 'Services(Diensten)' menu is present
    # And I should see that 'Enter' button is present

Feature: Verification of Bloomenty Home page

#   Scenario: Verify 'Cookies' page
#     When I navigate to Home page
#     Then I should see 'Cookies' page
#     And I should see 'your flower community' icon
#     And I should see 'Uw cookievoorkeuren' page header
#     And I should see 'Cookies' rules
#     And I should see 'Accept' button
#     And I should see 'Not Accept' button
    
    Scenario: Verify that 'Cookies' page is displayed
    When I navigate to Home page
    And I wait for 3 seconds
    Then I should see that 'Cookies' page is displayed

  Scenario: Verify 'Cancel' button on the 'Cookies' page
    # When I navigate to Home page
    # And I wait for 3 seconds
    When I press 'Cancel' button on the 'Cookies' page
    Then I should see that 'Cookies' page is Not displayed

Scenario: Verify that 'Cookies' page is Not displayed after Page Refresh
    # When I navigate to Home page
    # And I wait for 3 seconds
    # And I press 'Cancel' button on the 'Cookies' page
    When I refresh the page
    And I wait for 3 seconds
    Then I should see that 'Cookies' page is Not displayed