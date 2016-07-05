Feature: Smoke Test

  As a dev I want to make sure my testing
  framework is up

  @watch
  Scenario: Find home
    Given I am home
    Then I should see "Cherry Tomato"