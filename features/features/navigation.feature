Feature: Navigation feature

    The aim of these tests is to validate the navigation between different sections of the sales portal app

    @Nav001 @paths @web @salesPortal 
    Scenario Outline: As a user, I get to the reward screen for green and yellow path addresses and to the kickout screen for red path

        Given I am on the home page
        When I enter a <address> address
        Then I am taken to the <page> page

        Examples:
            | address     | page    |
            | green path  | reward  |
            | yellow path | reward  |
            | red path    | kickout |

    @Nav002 @sections @salesPortal
    Scenario Outline: As a user, I can navegate through the different sections of the home page

        Given I am on the home page
        When I access the <section>
        Then I am taken to the <page> page

        Examples:
            | section       | page         |
            | get started   | getStarted   |
            | our insurance | ourInsurance |
            | about us      | about        |
            | contact us    | contact      |

    @Nav003 @web @SalesPortal
    Scenario Outline: As a user, I can navigate to the coverage screen
        Given I am on the home page
        And I enter a <address> address
        When I navigate to the coverage screen
        Then I am taken to the <page> page

        Examples:
            | address    | page     |
            | green path | coverage |

    @Nav004 @web @SalesPortal
    Scenario Outline: As a user, I can navigate to your info screen
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        When I navigate to the info screen
        Then I am taken to the <page> page

        Examples:
            | address    | page |
            | green path | info |
    
    