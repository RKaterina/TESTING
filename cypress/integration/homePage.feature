Feature: Verification of Bloomenty Home page

##  Scenario: Verify elements presence on the 'Cookies' page
##    When I navigate to Home page
##    Then I should see "Flower community icon" on the 'Cookies' page
##    And I should see "Cookievoorkeuren header" on the 'Cookies' page
##    And I should see "Cookies rules" on the 'Cookies' page
##    And I should see "Accept button" on the 'Cookies' page
##    And I should see "Not Accept button" on the 'Cookies' page
#
  Scenario: Verify that 'Cookies' page is displayed
    When I navigate to 'Home' page
    And I wait for 3 seconds
    Then I should see that 'Cookies' page is displayed

  Scenario: Verify 'Cancel' button on the 'Cookies' page
    When I press 'Cancel' button on the 'Cookies' page
    Then I should see that 'Cookies' page is Not displayed

  Scenario: Verify that 'Cookies' page is Not displayed after Page Refresh
    When I refresh the page
    And I wait for 3 seconds
    Then I should see that 'Cookies' page is Not displayed

  Scenario: Verify 'Cookie page' link Via 'clicking the link'
    When I clear all Cookies
    And I refresh the page
    And I wait for 3 seconds
    And I select 'Cookie page' link on the 'Cookies' page
    Then I should see that 'Cookies rules' is opened

  Scenario: Verify 'Cookie page' link Via 'checking href'
    When I press 'Back' button in the Browser
    And I refresh the page
    And I wait for 3 seconds
    Then I should see that 'CookiesPage' link is correct

    Scenario: Verify 'Cookie page' link Via 'checking href'
    When I press 'Back' button in the Browser
    And I press 'Forward' button in the Browser
    And I refresh the page
    And I wait for 3 seconds
    Then I should see that 'CookiesPage' link is correct

 Scenario: Verify that 'Cookies' page is Not displayed after navigation to another page
   When I navigate to 'Vacancies' page
   Then I should see that 'Cookies' page is Not displayed

 Scenario: Verify 'Accept' button on the 'Cookies' page
   When I clear all Cookies
   And I press 'Accept' button on the 'Cookies' page
   Then I should see that 'Cookies' page is Not displayed

   Scenario: Verify correct 'Online platform' page header
   When I navigate to 'Home' page
   Then I should see correct 'Online platform' page header

#  Scenario: Verify that 'Cookies' page is Not displayed after Page Refresh
#    When I refresh the page
#    And I wait for 3 seconds
#    Then I should see that 'Cookies' page is Not displayed