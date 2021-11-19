import { When, Then } from '@wdio/cucumber-framework';
import InfoPage from '../pageobjects/info.page';
import RewardPage from '../pageobjects/reward.page';
import SuccessPage from '../pageobjects/success.page';

const pages = {
    reward : RewardPage,
    info: InfoPage,
    success: SuccessPage
}

Then(/^I see the following elements in the (.+) screen$/, async (page,table) => {
    let rows = table.hashes();
    await Promise.all(rows.map( async (row) => {
        await pages[page].screenValidation(row.element,row.reverse = '');
    }));
});

