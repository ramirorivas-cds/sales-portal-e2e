import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    contactUsPageUrl
} = literals.urls;

const {
    pagesIds
} = enums;

class ContactUsPage extends Page {

    constructor() {
        super(pagesIds.contactUsPage,contactUsPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new ContactUsPage();