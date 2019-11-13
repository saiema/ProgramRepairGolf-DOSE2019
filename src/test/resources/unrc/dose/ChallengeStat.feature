Feature: challenge stats

    Scenario: A user wants to see a challenge's stat
    Given that a user with id 10 is already logged on
    And exists a challenge with id 15
    And it was solved by a least one user
    When <User> sends the challenge's id 15 to the system
    Then the system will show the corresponding stats
