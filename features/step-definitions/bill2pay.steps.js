import { When } from "@cucumber/cucumber";
import Bill2payPage from "../pageobjects/bill2pay.page";
import { literals } from '../../utils/literals';

const {
    primaryInsured
} = literals;

When(/^I complete the card details and continue$/, async () => {
    await Bill2payPage.completeCard(primaryInsured.completeUser);
})