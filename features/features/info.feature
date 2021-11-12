Feature: Information Screen

    Tests related to the information screen in the Sales Portal

    @info001 @web @SalesPortal 
    Scenario Outline: As a user, I can add a primary insured and continue
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        When I enter an incomplete primary insured and continue
        Then I see the following elements in the info screen
            | element    |
            | form error |

        Examples:
            | address     |
            | green path  |
            | yellow path |
    
    @info002 @web @SalesPortal
    Scenario Outline: As a user, I can add a primary insured and continue
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        When I enter a complete primary insured
        When I enter an incomplete co insured and continue
        Then I see the following elements in the info screen
            | element    |   
            | form error |

        Examples:
            | address     |
            | green path  |
    
    @info003 @web @SalesPortal 
    Scenario Outline: As a user, I can add a primary insured and continue
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        When I enter a complete primary insured
        When I enter an incomplete primary mortgagee and continue
        Then I see the following elements in the info screen
            | element    |   
            | form error |

        Examples:
            | address     |
            | green path  |



        
