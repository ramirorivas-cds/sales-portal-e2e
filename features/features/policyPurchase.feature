Feature: Home Page Tests

    @PolicyPurchase001 @web @sales 
    Scenario Outline: As a user, I can purchase a mortgagee billed policy
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a complete primary insured
        And I enter a complete primary mortgagee and continue
        When I complete the checkout process for a mortgagee
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    |
            | green path |






