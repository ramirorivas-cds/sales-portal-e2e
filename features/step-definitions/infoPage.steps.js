import { Given, When, Then } from '@wdio/cucumber-framework';
import InfoPage from '../pageobjects/info.page';
import {literals} from '../../utils/literals';

const {
    primaryInsured,
    coApplicant,
    mortgagees
} = literals;

When(/^I enter a primary insured and continue$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.completeUser);
    await InfoPage.goToNextPage();
})

When(/^I enter an incomplete primary insured and continue$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.incompleteUser);
    await InfoPage.clickOnContinue();
})

When(/^I enter an incomplete co insured and continue$/, async () => {
    await InfoPage.completeCoApplicant(coApplicant.incompleteCoApplicant);
    await InfoPage.clickOnContinue();
})

When(/^I enter a complete primary insured$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.completeUser);
})

When(/^I enter a complete repeated primary insured and continue$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.completeRepeatedUser);
    await InfoPage.goToNextPage();
})

When(/^I enter a complete repeated primary insured$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.completeRepeatedUser);
})

When(/^I enter a complete primary mortgagee and continue$/, async () => {
    await InfoPage.completePrimaryMortgagee(mortgagees.completePrimaryMortgagee);
    await InfoPage.goToNextPage();
})

When(/^I enter an incomplete primary mortgagee and continue$/, async () => {
    await InfoPage.completePrimaryMortgagee(mortgagees.incompletePrimaryMortgagee);
    await InfoPage.clickOnContinue();
})

When(/^I enter an existant primary insured and continue$/, async () => {
    await InfoPage.completeFirstInsured(primaryInsured.completeRepeatedUser);
    await InfoPage.clickOnContinue();
})

When(/^I log in to the app$/, async () => {
    await InfoPage.signIn(primaryInsured.completeRepeatedUser);
})

When(/^I select a (.+) days backdated policy$/, async (days) => {
    await InfoPage.chooseEffectiveDate(days);
});

When(/^I continue to the checkout screen$/, async () => {
    await InfoPage.goToNextPage();
})
