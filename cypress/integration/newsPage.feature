Feature: Verification of Bloomenty News page

  Scenario: Verify 'News' title and icon
    When I navigate to "News" page
    And I wait for "3" seconds
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that "News" title on the "News" page is displayed

  Scenario: Verify BreadCrumb for the 'News' page
    Then I should see that BreadCrumb is "Displayed" for the "News" page
