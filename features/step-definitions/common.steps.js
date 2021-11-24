import { When, Then } from '@wdio/cucumber-framework';
import { quoteToDollarInt } from '../../utils/helpers';
import { expectQuoteTo } from '../../utils/assertions';
import InfoPage from '../pageobjects/info.page';
import RewardPage from '../pageobjects/reward.page';
import SuccessPage from '../pageobjects/success.page';
import CoveragePage from '../pageobjects/coverage.page';

const pages = {
    reward : RewardPage,
    coverage : CoveragePage,
    info: InfoPage,
    success: SuccessPage,
}

Then(/^I see the following elements in the (.+) screen$/, async (page,table) => {
    let rows = table.hashes();
    await Promise.all(rows.map( async (row) => {
        await pages[page].screenValidation(row.element,row.reverse = '');
    }));
});

Then(/^I see my premium quote (.+) for the (\w+) page$/, async (action,page) => { //TODO: cambiar esto en el reward feature. 
    if(action != 'remains the same') {
        await pages[page].waitForQuoteToChange();
    }
    let actualQuote = await quoteToDollarInt(await pages[page].getQuote());
    await expectQuoteTo(action,actualQuote);
});

