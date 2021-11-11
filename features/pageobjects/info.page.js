import Page from './page';
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";
import { isTrueSet } from '../../utils/helpers';

const {
    infoPageUrl
} = literals.urls;

const {
    salesInfo
} = enums.pagesIds;

const {
    infoFormError
} = enums.errors;

class InfoPage extends Page {

    constructor() {
        super(salesInfo, infoPageUrl);
    }

    get checkBox() { return $('#acceptConditionsInsuredCheckbox-container') }

    // Primary insured data
    get insuredFirstName() { return $$('#firstName')[0] }
    get insuredLastName()  { return $$('#lastName')[0] }
    get insuredEmail()     { return $$('#email')[0] }
    get insuredPhone()     { return $$('#phoneNumber')[0] }
    get insuredBirthday()  { return $$('#dateOfBirth')[0] }

    // Co-insured 
    get coApplicantCheck()     { return $('#coApplicant-commonYesRadioQuestionCheckbox-container div')}
    get coApplicantFirstName() { return $$('#firstName')[1] }
    get coApplicantLastName()  { return $$('#lastName')[1] }
    get coApplicantEmail()     { return $$('#email')[1] }
    get coApplicantPhone()     { return $$('#phoneNumber')[1] }
    get coApplicantBirthday()  { return $$('#dateOfBirth')[1] }
    get coApplicantRelation()  { return $$('#relationshipToPrimary')[0] }

    // Validation error 
    get formError() { return $$('p + p')[5]}

    get goToCheckoutBtn() { return $('#proceedInsuredStepButton') }

    getPageUrl() {
        return this.url;
    }

    async checkDisclosure() {
        await this.checkBox.waitForClick();
    }

    async completeFirstInsured({firstName, lastName, email, phone, birthday} = {}) {
        await this.insuredFirstName.setVal(firstName);
        await this.insuredLastName.setVal(lastName);
        await this.insuredEmail.setVal(email);
        await this.insuredPhone.setVal(phone);
        await this.insuredBirthday.clickAndSetVal(birthday);
    }

    async completeCoApplicant ({firstName, lastName, email, phone, birthday, relationToPrimary} = {}) {
        await browser.execute(async (element) => { 
            await element.click();
        }, await this.coApplicantCheck);
        await this.coApplicantFirstName.setVal(firstName);
        await this.coApplicantLastName.setVal(lastName);
        await this.coApplicantEmail.setVal(email);
        await this.coApplicantPhone.setVal(phone);
        await this.coApplicantBirthday.clickAndSetVal(birthday);
        await this.coApplicantRelation.setVal(relationToPrimary);
    }

    async clickOnContinue() {
        await this.goToCheckoutBtn.waitForClick();
    }

     /**
     * 
     * @param {string} element: the name of an element accoring to the enums
     * @returns an actual element associated to that string 
     */
      async elementSwitcher(element) {
        let selected;
        switch (element.toLowerCase()) {
            case infoFormError:
                selected = await this.formError;
                break;
            default:
                throw new Error(`${element} is not a valid element for ${this.pageId}`);
        }
        return selected;
    }

    async screenValidation(element, reverse) {
        let selected = await this.elementSwitcher(element);
        await selected.waitForDisplayed({ reverse: isTrueSet(reverse) });
    }

    async goToNextPage() {
        await this.clickOnContinue();
        await super.waitForSpinner();
    }
}

export default new InfoPage();
