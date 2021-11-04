import { When, Then } from '@wdio/cucumber-framework';
import CoveragePage from '../pageobjects/coverage.page'

When(/^I navigate to the info screen$/, async () => {
    await CoveragePage.goToNextPage();
})


