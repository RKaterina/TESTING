Feature: Verification of Bloomenty Blog page

  Scenario: Verify 'Blog' title and icon
    When I navigate to "Blog" page
    And I wait for "3" seconds
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that "Blog" title on the "Blog" page is displayed

  Scenario: Verify BreadCrumb for the 'Blog' page
    Then I should see that BreadCrumb is "Displayed" for the "Blog" page
