Feature: Challenge Stats

    Scenario: A user wants to see a challenge's stat
        Given the user "Sabalero" with id 15 has already logged in
        And exists a challenge with id 10
        And it was solved by a least one user
        When the user inputs the challenge's id 10 to the system
        Then the system will show the corresponding stats
