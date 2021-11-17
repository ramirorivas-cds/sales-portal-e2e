import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    getStartedPageUrl
} = literals.urls;

const {
    pagesIds
} = enums;

class GetStartedPage extends Page {

    constructor() {
        super(pagesIds.getStartedPage,getStartedPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new GetStartedPage();