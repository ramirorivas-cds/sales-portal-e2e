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

    get checkBox () { return $('#acceptConditionsInsuredCheckbox-container')}

    //Primary insured data
    get insuredFirstName() { return $$('#firstName')[0]}
    get insuredLastName()  { return $$('#lastName-label')[0]}
    get insuredEmail()     { return $$('#email')[0]}
    get insuredPhone()     { return $$('#phoneNumber')[0]}
    get insuredBirthday()  { return $$('#phoneNumber')[0]}

    getPageUrl() {
        return this.url;
    }

    async completeFirstInsured({firstName = '',lastName = '',email = '',phone = '',birthday = ''}) {
        await this.insuredFirstName.setVal(firstName);
        await this.insuredLastName.setVal(lastName);
        await this.insuredEmail.setVal(email);
        await this.insuredPhone.setVal(phone);
        await this.insuredBirthday.setVal(birthday);
    }
}

export default new InfoPage();
