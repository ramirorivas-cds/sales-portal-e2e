import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    ourInsurancePageUrl
} = literals.urls;

const {
    pagesIds,
} = enums;

class OurInsurancePage extends Page {

    constructor() {
        super(pagesIds.ourInsurancePage,ourInsurancePageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new OurInsurancePage();