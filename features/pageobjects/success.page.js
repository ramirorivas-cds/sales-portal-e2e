import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";
import { config } from "../../wdio.conf";
import { isTrueSet } from '../../utils/helpers';

const {
    successPageUrl
} = literals.urls;

const {
    pagesIds,
    successElements,
} = enums;

class CheckoutPage extends Page {

    constructor() {
        super(pagesIds.salesSuccess,successPageUrl);
    }

    get nextSteps() { return $('#activateAccountNextStepBoxButton')}
    get activateAccount() {return $('#getStartedAltNextStepBoxButton')}
    
    getPageUrl() {
        return this.url;
    }

     /**
     * 
     * @param {string} element: the name of an element accoring to the enums
     * @returns an actual element associated to that string 
     */
          async elementSwitcher(element) {
            let selected;
            switch (element.toLowerCase()) {
                case successElements.nextStepsButton:
                    selected = await this.nextSteps;
                    break;
                case successElements.activateAccountButton:
                    selected = await this.activateAccount;
                    break;
                default:
                    throw new Error(`${element} is not a valid element for ${this.pageId}`);
            }
            return selected;
        }
    
        async screenValidation(element, reverse,timeout = config.timeout.XXL) {
            let selected = await this.elementSwitcher(element);
            await selected.waitForDisplayed({ timeout: timeout, reverse: isTrueSet(reverse) });
        }
    
}

export default new CheckoutPage();