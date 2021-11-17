import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    aboutUsPageUrl
} = literals.urls;

const {
    pagesIds
} = enums;

class AboutUsPage extends Page {

    constructor() {
        super(pagesIds.aboutUsPage,aboutUsPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new AboutUsPage();