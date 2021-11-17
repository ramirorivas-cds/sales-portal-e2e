import Page from './page';
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';

const {
    kikoutPageUrl
} = literals.urls;

const {
    pagesIds,
} = enums;

class KikoutPage extends Page {

    constructor() {
        super(pagesIds.salesKikout,kikoutPageUrl);
    }

    getPageUrl(){
        return this.url;
    }

}

export default new KikoutPage();