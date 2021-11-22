@testing
Feature: Rewards tests

    Test that aim to test reward screen scenarios

    @Rewards001 @web @salesPortal
    Scenario Outline: As a user, I can see the rated rewards

        Given I am on the home page
        When I enter a <address> address
        Then I see the following elements in the reward screen
            | element                   |
            | military                  |
            | tankless water heater     |
            | burglar alarm             |
            | age 60 and over           |
            | fire protection           |
            | water detection & shutoff |
            | secured community         |
            | surge protection          |
            | non-smoker                |
            | hurricane windows         |

        Examples:
            | address     |
            | green path  |
            | yellow path |

    @Rewards002 @web @salesPortal 
    Scenario Outline: As a user, I can see non-rated rewards
        Given I am on the home page
        When I enter a <address> address
        Then I see the following elements in the reward screen
            | element                  |
            | video door bell          |
            | high ac seer rating      |
            | fire extinguisher        |
            | smart lock               |
            | home warranty            |
            | whole house              |
            | solar panel              |
            | pest control             |
            | hoa                      |
            | safe driver              |
            | purchased life insurance |
            | organ donor              |
            | smart thermostat         |
            | gym member               |
            | smart devices            |
            | blood donor              |

        Examples:
            | address     |
            | green path  |
            | yellow path |

    @Rewards003  @creditScore @web @salesPortal
    Scenario Outline: As a user I can select the <score> insurance score
        Given I am on the home page
        And I enter a <address> address
        When I select the <score> score
        Then I see my insurance score is <number>

        Examples:
            | address    | score   | number |
            | green path | highest | 800    |
            | green path | lowest  | 580    |

    @Rewards004 @creditScore @web @salesPortal
    Scenario Outline: As a user, if I <action> my credit score, my premium changes
        Given I am on the home page
        And I enter a <address> address
        When I select the <score> score
        Then I see my premium quote <action>

        Examples:
            | address    | score   | action    |
            | green path | highest | decreases |
            | green path | lowest  | increases |

    @Rewards005 @web @salesPortal 
    Scenario Outline: As a user, when I select a reward my premium decreases
        Given I am on the home page
        And I enter a <address> address
        When I select the following rewards
            | rewards               |
            | military              |
            | tankless water heater |
            | burglar alarm         |
            | fire protection       |
        Then I see my premium quote <action>

        Examples:
            | address    | action    |
            | green path | decreases |

    @Rewards006 @web @salesPortal
    Scenario Outline: As a user, if I select more than $100 in non-rated rewards I see a modal
        Given I am on the home page
        And I enter a <address> address
        When I select 100 dollars in non rated rewards
        Then I see the following elements in the reward screen
            | element            |
            | reward limit modal |

        Examples:
            | address    |
            | green path |

    @Rewards007 @web @salesPortal
    Scenario Outline: As a user, I can see the amount of rewards selected in the quoteBox
        Given I am on the home page
        And I enter a <address> address
        When I select the following rewards
            | rewards               |
            | tankless water heater |
            | fire protection       |
            | military              |
            | smart thermostat      |
            | pest control          |
            | home warranty         |
        Then I see that my quotebox shows the correct amount of rewards selected

        Examples:
            | address    |
            | green path |

    @Rewards008 @web @salesPortal 
    Scenario Outline: As a user, If I exceed the non-rated rewards amount, the rewards I select don't affect the pemium
        Given I am on the home page
        And I enter a <address> address
        And I select 100 dollars in non rated rewards and close the modal
        When I select the following rewards
            | rewards       |
            | gym member    |
            | smart devices |
        Then I see my premium quote <action>

        Examples:
            | address    | action           |
            | green path | remains the same |


