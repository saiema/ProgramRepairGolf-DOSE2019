Feature: The application responds appropriately to all events for logging into the system.

    Background:
        Given that the application has been started

    Scenario: Valid login into the system
        Given that a user has signed up with name "Pablo Ponzio", email "pponzio@dc.exa.unrc.edu.ar" and password "pablitoclavounclavito"
        When I attempt to login with user email "pponzio@dc.exa.unrc.edu.ar" and password "pablitoclavounclavito"
        Then the system should inform that I have successfully logged in

    Scenario: Login into the system with invalid password
        Given that a user has signed up with name "Pablo Ponzio", email "pponzio@dc.exa.unrc.edu.ar" and password "pablitoclavounclavito"
        When I attempt to login with user email "pponzio@dc.exa.unrc.edu.ar" and password "pepitoclavounclavito"
        Then the system should inform that login has failed

    Scenario: Login into the system with invalid user
        Given that no user with email "pponzio@dc.exa.unrc.edu.ar" has signed up into the system
        When I attempt to login with user email "pponzio@dc.exa.unrc.edu.ar" and password "pablitoclavounclavito"
        Then the system should inform that login has failed
