import Page from './page';
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    infoPageUrl
} = literals.urls;

const {
    salesInfo
} = enums.pagesIds;

class InfoPage extends Page {

    constructor() {
        super(salesInfo,infoPageUrl);
    }

    getPageUrl() {
        return this.url;
    }


}

export default new InfoPage();
