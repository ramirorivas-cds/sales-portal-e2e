import { Given, When, Then } from '@wdio/cucumber-framework';
import { expectUrlToEqual } from '../../utils/assertions';
import AboutUsPage from '../pageobjects/aboutUs.page';
import HomePage from '../pageobjects/home.page';
import KikoutPage from '../pageobjects/kikout.page';
import OurInsurancePage from '../pageobjects/ourInsurance.page';
import RewardPage from '../pageobjects/reward.page';
import GetStartedPage from '../pageobjects/getStarted.page';
import ContactUsPage from '../pageobjects/contactUs.page';
import CoveragePage from '../pageobjects/coverage.page';
import InfoPage from '../pageobjects/info.page';
import CheckoutPage from '../pageobjects/checkout.page';

const pages = {
    home  : HomePage,
    reward : RewardPage,
    kickout : KikoutPage,
    about : AboutUsPage,
    ourInsurance: OurInsurancePage,
    getStarted: GetStartedPage,
    contact: ContactUsPage,
    coverage : CoveragePage,
    info : InfoPage,
    checkout : CheckoutPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I enter a (.+) address$/, async (address) => {
    await HomePage.completeAddressAndContinue(address);
});

When(/^I access the (.+)$/, async (section) => {
    await HomePage.goToSection(section);
});

Then(/^I am taken to the (.+) page$/, async (page) => {
    let actualUrl = await pages[page].getPageUrl();
    await expectUrlToEqual(actualUrl);
});

