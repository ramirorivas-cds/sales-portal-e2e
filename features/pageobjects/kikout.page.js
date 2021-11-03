import Page from './page';
import { literals } from '../../utils/literals';

const {
    kikoutPageUrl
} = literals.urls;

class KikoutPage extends Page {

    constructor() {
        super('Kickout Page',kikoutPageUrl);
    }

    getPageUrl(){
        return this.url;
    }

}

export default new KikoutPage();