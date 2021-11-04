import { When, Then } from '@wdio/cucumber-framework';
import RewardPage from '../pageobjects/reward.page';
import CoveragePage from '../pageobjects/coverage.page';
import { enums } from '../../utils/enums';

const pages = {
    reward : RewardPage,
}

Then(/^I see the following elements in the (.+) screen$/, async (page,table) => {
    let rows = table.hashes();
    await Promise.all(rows.map( async (row) => {
        await pages[page].screenValidation(row.element,row.reverse = '');
    }));
});

