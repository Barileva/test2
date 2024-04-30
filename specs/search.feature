Feature: Search

Scenario: Search for a term
  Given I am on the "/" page
  And I accept cookies
  When I search for "asdfgh"
  Then i should see "asdfgh" in the search results
  

  Scenario Outline: Search for some terms
    Given I am on the "/" page
    And I accept cookies
    When I search for "<searchTerm>"
    Then i should see "<searchTerm>" in the search results

Examples:
  | searchTerm        |
  | asdfgh            |
  | testare           |
  