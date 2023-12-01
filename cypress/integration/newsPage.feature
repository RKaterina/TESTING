Feature: Verification of Bloomenty News page

  Scenario: Verify 'News' title and icon
    When I navigate to "News" page
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that "News" title on the "News" page is displayed

  Scenario: Verify BreadCrumb for the 'News' page
    When I navigate to "News" page
    Then I should see that BreadCrumb is "Displayed" for the "News" page

  Scenario: Verify that 'Enter' key work correctly on the 'News' page
    And I navigate to "News" page
    When I fill in the 'Email' field 'Email' correct data on the 'News' page
    And I press "Enter" key for "Email" field on the "News" page
    Then I should see that notification on the 'News' page is displayed

  Scenario: Verify that 'Backspace' key work correctly on the 'News' page
    When I fill in the 'Email' field 'Kate' data on the 'News' page
    And I press "Backspace" key for "Email" field on the "News" page
    And I fill in the 'Email' field 'Test' data on the 'News' page
    Then I should see that 'Email' field contain 'KatTest' data

  Scenario: Verify that 'Delete' key work correctly on the 'News' page
    When I fill in the 'Email' field 'Kate' data on the 'News' page
    And I move cursor to the "Left" for "Email" field on the "News" page
    And I press "Delete" key for "Email" field on the "News" page
    And I fill in the 'Email' field 'Test' data on the 'News' page
    Then I should see that 'Email' field contain 'KatTest' data
