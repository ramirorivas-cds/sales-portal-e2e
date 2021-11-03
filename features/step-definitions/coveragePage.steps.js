import { When, Then } from '@wdio/cucumber-framework';
import CoveragePage from '../pageobjects/coverage.page';
import RewardPage from '../pageobjects/reward.page';
import world  from '../../world';
import { quoteToDollarInt } from '../../utils/helpers';

When(/^I navigate to the coverage screen$/, async () => {
    await RewardPage.goToNextPage();
})