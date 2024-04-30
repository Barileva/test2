Feature: Navigation
User navigates the site.

Scenario: Navigate the site
  Given I am on the "/" page 
  When I accept cookies
  And I click on "tillsyn"
  Then I should see "Tillsyn" as the title
