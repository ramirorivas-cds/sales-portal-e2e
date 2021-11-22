Feature: coverage test

    Test that aim to test coverage screen scenarios

    @Coverage007 @web @salesPortal @testing
    Scenario Outline: As a user, if I <action> my rebuild home score, my premium changes
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select standard options
        When I <action> my dwelling
        Then I see my premium <change>

        Examples:
            | address     | action   | change    |
            | green path  | decrease | decreases |
            #| yellow path | increase | increases |