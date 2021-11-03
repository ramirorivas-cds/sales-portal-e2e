import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    contactUsPageUrl
} = literals.urls;

const {
    contactUsPage
} = enums.pagesIds;

class ContactUsPage extends Page {

    constructor() {
        super(contactUsPage,contactUsPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new ContactUsPage();