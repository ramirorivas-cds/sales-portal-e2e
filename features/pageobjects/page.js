/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import { config } from '../../wdio.conf';
import Spinner from './components/spinner';
import QuoteBox from './components/quoteBox';

export default class Page {

    constructor(pageId,url) {
        this.pageId = pageId;
        this.url = url;
    }

    get quoteValue() { return $('h3 span:first-child') }


    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     open (path) {
        return browser.url(path)
    }

    async waitForSpinner(timeout = config.timeout.XL) {
        await Spinner.waitForSpinner(timeout);
    }

    async getSavingsValue() {
        return await QuoteBox.getSavingsAmountValue();
    }

    async getRewardsAmount() {
        return await QuoteBox.getRewardAmountValue();
    }

    async getQuote() {
        await this.quoteValue.waitForDisplayed();
        return await this.quoteValue.getVal();
    }

    async waitForQuoteToChange() {
        await this.quoteValue.waitForValueToChange();
    }

}
