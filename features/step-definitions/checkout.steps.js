import { Given, When, Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../pageobjects/checkout.page'
import { literals } from '../../utils/literals';

const {
    completeUser
} = literals.primaryInsured;

When(/^I complete the checkout process for a (\w+)$/, async (paymentMethod) => {
    await CheckoutPage.completeDisclosures();
    await CheckoutPage.completeSignature(completeUser);
    await CheckoutPage.choosePaymentType(paymentMethod);
    await CheckoutPage.goToNextPage();
})

Then(/^I see the next step button$/,async () => {
    await CheckoutPage.nextStep();
})