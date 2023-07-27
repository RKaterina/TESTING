Feature: Verification for Header of Bloomenty

  Scenario: Verify header menu
    When I navigate to "Home" page
    And I wait for "3" seconds
    And I press 'Accept' button on the 'Cookies' page
    Then I should see that "Bloomenty logo" is displayed
    And I should see that "Services menu" is displayed
    And I should see that "Encyclopedia menu" is displayed
    And I should see that "Forum menu" is displayed
    And I should see that "About us menu" is displayed
    And I should see that "Active languaage menu" is displayed

  Scenario: Verify header 'Vacancies' sub menu for 'Services' header menu
    When I press item "Vacancies" for 'Services' header menu
    Then I should see that "Vacancies" title on the "Vacancies" page is displayed

#   Scenario: Verify 'TravelClub' sub menu for 'Services' header menu
#     When I press item "TravelClub" for 'Services' header menu
#     Then I should see that 'TravelClub' title on the 'TravelClub' page is displayed

  Scenario: Verify 'News' sub menu for 'Services' header menu
    When I press item "News" for 'Services' header menu
    Then I should see that "News" title on the "News" page is displayed

  Scenario: Verify 'Blog' sub menu for 'Services' header menu
    When I press item "Blog" for 'Services' header menu
    Then I should see that "Blog" title on the "Blog" page is displayed
