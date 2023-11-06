Feature: Verification for Footer of Bloomenty

  Scenario: Verify footer of Bloomenty
    When I navigate to "Home" page
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that Four unclickable items in the footer is displayed

  Scenario: Verify item 'About us' in the footer navigation
    When I press item "About us" in the footer navigation
    Then I should see that "About us" title on the "About us" page is displayed

  Scenario: Verify item 'Our team' in the footer navigation
    When I press item "Our team" in the footer navigation
    Then I should see that "Our team" title on the "Our team" page is displayed

  Scenario: Verify item 'Contacts' in the footer navigation
    When I press item "Contacts" in the footer navigation
    Then I should see that "Contacts" title on the "Contacts" page is displayed

  Scenario: Verify item 'News' in the footer navigation
    When I press item "News" in the footer navigation
    Then I should see that "News" title on the "News" page is displayed

  Scenario: Verify item 'Vacancies' in the footer navigation
    When I press item "Vacancies" in the footer navigation
    Then I should see that "Vacancies" title on the "Vacancies" page is displayed

  Scenario: Verify item 'My account' in the footer navigation
    When I press item "My account" in the footer navigation
    And I fill in the "Email" field with "Email correct" data on the 'Login' page
    And I fill in the "Password" field with "Password correct" data on the 'Login' page
    And I press 'Submit' button on the 'Login' page
    Then I should see that "My account" title on the "My account" page is displayed

  Scenario: Verify item 'Forum' in the footer navigation
    Given I press "Logout" button on the header
    When I press item "Forum" in the footer navigation
    Then I should see that "Forum" title on the "Forum" page is displayed

  Scenario: Verify item 'Platform rules' for official docs in the footer
    Given I navigate to "Home" page
    When I press item "Platform rules" for official docs in the footer
    Then I should see that "Platform rules" on the 'Official docs' page is displayed

  Scenario: Verify item 'Pravicy policy' for official docs in the footer
    When I press item "Privacy policy" for official docs in the footer
    Then I should see that "Privacy policy" on the 'Official docs' page is displayed
