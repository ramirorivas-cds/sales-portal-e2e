import { Given, When, Then } from '@wdio/cucumber-framework';
import InfoPage from '../pageobjects/info.page';
import {literals} from '../../utils/literals';

const {
    completeUser,
    incompleteUser,
} = literals.primaryInsured;

const {
    completeCoApplicant,
    incompleteCoApplicant,
} = literals.coApplicant

const {
    completePrimaryMortgagee,
    incompletePrimaryMortgagee
} = literals.mortgagees

When(/^I enter a primary insured and continue$/, async () => {
    await InfoPage.checkDisclosure();
    await InfoPage.completeFirstInsured(completeUser);
    await InfoPage.goToNextPage();
})

When(/^I enter an incomplete primary insured and continue$/, async () => {
    await InfoPage.checkDisclosure();
    await InfoPage.completeFirstInsured(incompleteUser);
    await InfoPage.clickOnContinue();
})

When(/^I enter an incomplete co insured and continue$/, async () => {
    await InfoPage.completeCoApplicant(incompleteCoApplicant);
    await InfoPage.clickOnContinue();
})

When(/^I enter a complete primary insured$/, async () => {
    await InfoPage.checkDisclosure();
    await InfoPage.completeFirstInsured(completeUser);
})

When(/^I enter a complete primary mortgagee and continue$/, async () => {
    await InfoPage.completePrimaryMortgagee(completePrimaryMortgagee);
    await InfoPage.goToNextPage();
})

When(/^I enter an incomplete primary mortgagee and continue$/, async () => {
    await InfoPage.completePrimaryMortgagee(incompletePrimaryMortgagee);
    await InfoPage.clickOnContinue();
})