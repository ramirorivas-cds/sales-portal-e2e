@testing
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

    @PolicyPurchase002 @web @sales
    Scenario Outline: As a user, I can purchase an application
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a primary insured and continue
        When I complete the checkout process and continue
        Then I see the following elements in the success screen
            | element                 |
            | activate account button |

        Examples:
            | address     |
            | yellow path |


    @PolicyPurchase003 @web @sales
    Scenario Outline: As a user, I can purchase a mortgagee billed policy with a registered user
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a complete repeated primary insured
        And I enter a complete primary mortgagee and continue
        And I log in to the app
        When I complete the checkout process for a mortgagee
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    |
            | green path |


    @PolicyPurchase004 @web @sales @testing
    Scenario Outline: As a user, I can purchase a full pay policy
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a primary insured and continue
        And I complete the checkout process for a <payment>
        When I complete the card details and continue
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    | payment  |
            | green path | full-pay |

    @PolicyPurchase004 @web @sales
    Scenario Outline: As a user, I can purchase an eleven pay policy
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a primary insured and continue
        And I complete the checkout process for a <payment>
        When I complete the card details and continue
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    | payment    |
            | green path | eleven-pay |

    @PolicyPurchase005 @web @sales
    Scenario Outline: As a user, I can purchase a full pay policy with a registered user
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a complete repeated primary insured and continue
        And I log in to the app
        And I complete the checkout process for a <payment>
        When I complete the card details and continue
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    | payment  |
            | green path | full-pay |

    @PolicyPurchase006 @web @sales 
    Scenario Outline: As a user, I can purchase an eleven pay policy with a registered user
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a complete repeated primary insured and continue
        And I log in to the app
        And I complete the checkout process for a <payment>
        When I complete the card details and continue
        Then I see the following elements in the success screen
            | element           |
            | next steps button |

        Examples:
            | address    | payment    |
            | green path | eleven-pay |

    @PolicyPurchase007 @web @sales
    Scenario Outline: As a user, I can purchase an application with a registered user 
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I navigate to the info screen
        And I enter a complete repeated primary insured and continue
        And I log in to the app
        When I complete the checkout process and continue
        Then I see the following elements in the success screen
            | element                 |
            | activate account button |

        Examples:
            | address     |
            | yellow path |





