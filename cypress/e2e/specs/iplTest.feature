Feature: Validate IPL pages
Validates flows of IPL app

Scenario: Login with valid credentials
    Given User navigate to ipl home page
    Then Navigate to stats page
    And Update filter for Bowlers with Best-Strike Rate
    