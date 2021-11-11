import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    checkoutPageUrl
} = literals.urls;

const {
    salesCheckout
} = enums.pagesIds;

class CheckoutPage extends Page {

    constructor() {
        super(salesCheckout,checkoutPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new CheckoutPage();