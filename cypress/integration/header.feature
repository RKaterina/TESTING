Feature: Verification for Header of Bloomenty

  Scenario: Verify header menu
    When I navigate to "Home" page
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that 'Bloomenty logo' on the header is displayed
    And I should see that "Services" menu on the header is displayed
    And I should see that "Encyclopedia" menu on the header is displayed
    And I should see that "Forum" menu on the header is displayed
    And I should see that "About us" menu on the header is displayed
    And I should see that "Active language" menu on the header is displayed

  Scenario: Verify header 'Vacancies' sub menu for 'Services' header menu
    When I press item "Vacancies" for 'Services' header menu
    Then I should see that "Vacancies" title on the "Vacancies" page is displayed

  Scenario: Verify 'News' sub menu for 'Services' header menu
    When I press item "News" for 'Services' header menu
    Then I should see that "News" title on the "News" page is displayed

  Scenario: Verify 'Blog' sub menu for 'Services' header menu
    When I press item "Blog" for 'Services' header menu
    Then I should see that "Blog" title on the "Blog" page is displayed
