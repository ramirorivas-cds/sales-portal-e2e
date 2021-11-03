import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    ourInsurancePageUrl
} = literals.urls;

const {
    ourInsurancePage
} = enums.pagesIds;

class OurInsurancePage extends Page {

    constructor() {
        super(ourInsurancePage,ourInsurancePageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new OurInsurancePage();