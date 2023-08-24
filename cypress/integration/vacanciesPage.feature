Feature: Verification of Bloomenty Vacancies page

  Scenario: Verify Vacancies title and icon
    Given I navigate to "Home" page
    And I wait for "3" seconds
    And I press 'Accept' button on the 'Cookies' page
    When I navigate to "Vacancies" page
    Then I should see that "Vacancies" title on the "Vacancies" page is displayed
    And I should see that 'Vacancies' icon on the 'Vacancies' page is displayed
    And I should see that "All vacancies" dropdown on the 'Vacancies' page is displayed
    And I should see that "All countries" dropdown on the 'Vacancies' page is displayed
    And I should see that "All cities" dropdown on the 'Vacancies' page is displayed

  Scenario: Verify select 'Greenhouse worker' item for 'Nederland' and 'Aalsmeer' on the 'Vacancies' page
    When I press "All vacancies" dropdown on the 'Vacancies' page
    And I select "Greenhouse worker" item in the 'All vacancies' dropdown 'Vacancies' page
    And I press "All countries" dropdown on the 'Vacancies' page
    And I select "Nederland" item in the 'All countries' dropdown 'Vacancies' page
    And I press "All cities" dropdown on the 'Vacancies' page
    And I select "Aalsmeer" item in the 'All cities' dropdown 'Vacancies' page
    Then I should see that "Greenhouse worker" item top 'Vacancies' on the 'Vacancies' page is displayed
    And I should see that "Nederland" item dropdown 'All countries' on the 'Vacancies' page is displayed
    And I should see that "Aalsmeer" item dropdown 'All cities' on the 'Vacancies' page is displayed

  Scenario: Verify select 'Florist' item for 'Polen' and 'Gdańsk' on the 'Vacancies' page
    When I press "All vacancies" dropdown on the 'Vacancies' page
    And I select "Florist" item in the 'All vacancies' dropdown 'Vacancies' page
    And I press "All countries" dropdown on the 'Vacancies' page
    And I select "Polen" item in the 'All countries' dropdown 'Vacancies' page
    And I press "All cities" dropdown on the 'Vacancies' page
    And I select "Gdańsk" item in the 'All cities' dropdown 'Vacancies' page
    Then I should see that "Florist" item top 'Vacancies' on the 'Vacancies' page is displayed
    And I should see that "Polen" item dropdown 'All countries' on the 'Vacancies' page is displayed
    And I should see that "Gdańsk" item dropdown 'All cities' on the 'Vacancies' page is displayed

  Scenario: Verify select 'Wedding coordinator - Freelance' item for 'Italië' and 'Milano' on the 'Vacancies' page
    When I press "All vacancies" dropdown on the 'Vacancies' page
    And I select "Wedding coordinator Freelance" item in the 'All vacancies' dropdown 'Vacancies' page
    And I press "All countries" dropdown on the 'Vacancies' page
    And I select "Italië" item in the 'All countries' dropdown 'Vacancies' page
    And I press "All cities" dropdown on the 'Vacancies' page
    And I select "Milano" item in the 'All cities' dropdown 'Vacancies' page
    Then I should see that "Wedding coordinator Freelance" item top 'Vacancies' on the 'Vacancies' page is displayed
    And I should see that "Italië" item dropdown 'All countries' on the 'Vacancies' page is displayed
    And I should see that "Milano" item dropdown 'All cities' on the 'Vacancies' page is displayed
