import { When, Then } from '@wdio/cucumber-framework';
import CoveragePage from '../pageobjects/coverage.page'
import { quoteToDollarInt } from '../../utils/helpers';

When(/^I (.+) my dwelling$/, async (action) => {
    await CoveragePage.selectDwelling(action);
});

When(/^I select standard options$/, async () => {
    await CoveragePage.selectStandardOption();
});


When(/^I navigate to the info screen$/, async () => {
    await CoveragePage.goToNextPage();
})

Then(/^I see my premium (.+)$/, async (action) => {
    let actualQuote = await quoteToDollarInt(await CoveragePage.getQuote());
    await expectQuoteTo(action,actualQuote);
});


