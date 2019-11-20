Feature: Challenge Stats

    Scenario: An user wants to see a challenge's stat
        Given the user with id 15 has already logged in
        And exists a challenge with id 10
        And it was solved by a least one user
        When the user inputs the challenge's id 10 into the system
        Then the system will show the corresponding stats
