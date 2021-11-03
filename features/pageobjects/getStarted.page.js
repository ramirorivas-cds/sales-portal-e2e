import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    getStartedPageUrl
} = literals.urls;

const {
    getStartedPage
} = enums.pagesIds;

class GetStartedPage extends Page {

    constructor() {
        super(getStartedPage,getStartedPageUrl);
    }

    getPageUrl() {
        return this.url;
    }
}

export default new GetStartedPage();