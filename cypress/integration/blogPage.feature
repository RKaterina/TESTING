Feature: Verification of Bloomenty Blog page

  Scenario: Verify 'Blog' title and icon
    When I navigate to "Blog" page
    And I press "Accept" button on the 'Cookies' page
    Then I should see that "Blog" title on the "Blog" page is displayed

  Scenario: Verify BreadCrumb for the 'Blog' page
    Then I should see that BreadCrumb is "Displayed" for the "Blog" page

  Scenario: Verify article header on the 'One article' page for the 'First' article (with two packets)
    When I select "Landscape design" section
    And I copy header for the "First" article on the 'Article List' page
    And I press 'Read' button for "First" article on the 'All article' page
    Then I should see that "First" article header is the same as for 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'First' article (with one packet)
    Given I press 'Back' button in the Browser
    When I copy header for the "First" article for 'Article List' page
    And I press 'Read' button for "First" article on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'First' article
    Given I press 'Back' button in the Browser
    When I copy header for the article #"1" on the 'Article List' page
    And I press 'Read' button for article #"1" on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Second' article (with two packets)
    Given I press 'Back' button in the Browser
    When I copy header for the "Second" article on the 'Article List' page
    And I press 'Read' button for "Second" article on the 'All article' page
    Then I should see that "Second" article header is the same as for 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Second' article (with one packet)
    Given I press 'Back' button in the Browser
    When I copy header for the "Second" article for 'Article List' page
    And I press 'Read' button for "Second" article on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Second' article
    Given I press 'Back' button in the Browser
    When I copy header for the article #"2" on the 'Article List' page
    And I press 'Read' button for article #"2" on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Third' article (with two packets)
    Given I press 'Back' button in the Browser
    When I copy header for the "Third" article on the 'Article List' page
    And I press 'Read' button for "Third" article on the 'All article' page
    Then I should see that "Third" article header is the same as for 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Third' article (with one packet)
    Given I press 'Back' button in the Browser
    When I copy header for the "Third" article for 'Article List' page
    And I press 'Read' button for "Third" article on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'Third' article
    Given I press 'Back' button in the Browser
    When I copy header for the article #"3" on the 'Article List' page
    And I press 'Read' button for article #"3" on the 'All article' page
    Then I should see that article header is the same as on the 'One article' page

  Scenario: Verify article header on the 'One article' page for the 'First', 'Second' and 'Third' articles
    Given I navigate to "Blog" page
    When I select "Landscape design" section
    When I copy header for the "First" article on the 'Article List' page
    And I copy header for the "Second" article on the 'Article List' page
    And I copy header for the "Third" article on the 'Article List' page
    And I press 'Read' button for article #"1" on the 'All article' page
    Then I should see that "First" article header is the same as for 'One article' page
    And I press 'Back' button in the Browser
    And I press 'Read' button for article #"2" on the 'All article' page
    And I should see that "Second" article header is the same as for 'One article' page
    And I navigate to "landscape design" page
    And I press 'Read' button for article #"3" on the 'All article' page
    And I should see that "Third" article header is the same as for 'One article' page
