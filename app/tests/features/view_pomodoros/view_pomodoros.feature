Feature: View Pomodoros

  As a user,
  I want to be able to see past pomodoros
  So that I can look back at what I've been
  doing and keep track of what I've worked on

  @watch
  Scenario: I have no pomodoros
    Given I am authenticated
    And I have no pomodoros
    When I review my activity
    Then I should be informed that I have none
