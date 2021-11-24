import { When, Then } from '@wdio/cucumber-framework';
import RewardPage from '../pageobjects/reward.page';
import { expectTextToEqIgnoreCase, expectQuoteTo, expectTextToEq } from '../../utils/assertions';
import world  from '../../world';
import { quoteToDollarInt } from '../../utils/helpers';

When(/^I select the (.+) score$/, async (score) => {
    world.quoteValue = await quoteToDollarInt(await RewardPage.getQuote());
    await RewardPage.selectCreditScore(score);
});

When(/^I select the following rewards$/, async (table) => {
    world.quoteValue = await quoteToDollarInt(await RewardPage.getQuote());
    let rewards = table.hashes(); 
    await Promise.all(rewards.map( async (reward) => { 
        await RewardPage.selectReward(reward.rewards);  
    }));
    world.rewardAmount = rewards.length;
});

When(/^I select 100 dollars in non rated rewards and close the modal$/, async() => {
    await RewardPage.selectRewardUntil();
    await RewardPage.closeModal();
    world.quoteValue = await quoteToDollarInt(await RewardPage.getQuote());
})

When(/^I select 100 dollars in non rated rewards$/, async () => {
    await RewardPage.selectRewardUntil();
});

When(/^I navigate to the coverage screen$/, async () => {
    await RewardPage.goToNextPage();
});

Then(/^I see my insurance score is (.+)$/, async (creditScoreVal) => {
    let actualCreditScore = await RewardPage.getCreditScore();
    await expectTextToEqIgnoreCase(actualCreditScore, creditScoreVal);
});

Then(/^I see that my quotebox shows the correct amount of rewards selected$/, async () => {
    await RewardPage.waitForQuoteToChange();
    let actualRewardAmount = await RewardPage.getQuoteBoxRewardAmount();
    await expectTextToEq(world.rewardAmount,actualRewardAmount);
});



