// Class for the spinner component in the sales site, all methods related to it must be defined 
// in this class and not in the pageObject Class of the page implementing it. 

import { config } from "../../../wdio.conf";

class Spinner {

    get spinner() { return $('.spinner-border img[alt="icon"]')}

    async waitForSpinner(timeout = config.timeout.XL) {
        await this.spinner.waitForDisplayed({timeout});
        await this.spinner.waitForDisplayed({timeout,reverse: true});
    }
}

module.exports = new Spinner();