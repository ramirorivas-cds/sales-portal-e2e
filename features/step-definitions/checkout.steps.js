import {    When, Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../pageobjects/checkout.page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';

const {
    completeUser
} = literals.primaryInsured;

const {
    entities
} = enums;

When(/^I complete the checkout process for a (.+)$/, async (paymentMethod) => {
    await CheckoutPage.completeDisclosures();
    await CheckoutPage.completeSignature(completeUser);
    await CheckoutPage.choosePaymentType(paymentMethod);
    await CheckoutPage.goToNextPage(entities.policy);
})

When(/^I complete the checkout process and continue$/, async () => {
    await CheckoutPage.completeDisclosures(entities.application);
    await CheckoutPage.completeSignature(completeUser);
    await CheckoutPage.goToNextPage(entities.application);
})

Then(/^I see the next step button$/,async () => {
    await CheckoutPage.nextStep();
})