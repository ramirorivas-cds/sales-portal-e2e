import { When, Then } from '@wdio/cucumber-framework';
import CoveragePage from '../pageobjects/coverage.page'

When(/^I navigate to the info screen$/, async () => {
    await CoveragePage.goToNextPage();
})

When(/^I (.+) my cost to rebuild home$/, async (action) => {
    await CoveragePage.moveDwelling(action);
});

When(/^I select the default settings for my quote$/, async () => {
    await CoveragePage.selectDefaultCoverageOptions();
});

