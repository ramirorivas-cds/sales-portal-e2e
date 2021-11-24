Feature: Coverage Feature

    Feature Description

    @coverage0007 @web @salesPortal 
    Scenario Outline: As a user, if I <action> my cost to rebuild home, my premium <premium>
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I <action> my cost to rebuild home
        Then I see my premium quote <action> for the coverage page

        Examples:
            | address    | action   |
            | green path | increase |
