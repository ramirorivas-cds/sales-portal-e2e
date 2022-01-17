import Page from './page';
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";
import { isTrueSet } from '../../utils/helpers';
import moment from 'moment';

const {
    infoPageUrl
} = literals.urls;

const {
    pagesIds,
    infoPageElements
} = enums;

class InfoPage extends Page {

    constructor() {
        super(pagesIds.salesInfo, infoPageUrl);
    }

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

    // Mortgagee

    get mortgageeBtn()       { return $('#addMortgageeFormButton')}
    get primaryCompanyName() { return $$('#bank_name')[0]}
    get primaryLoanNumber()  { return $$('#loan_number')[0]}
    get primaryAddress()     { return $$('input#address')[1]}
    get primaryCity()        { return $('input#city')}
    get primaryState()       { return $$('#state[role="button"]')[0]}
    get primaryPostal()      { return $$('input#postalCode')[0]}
    get primaryType()        { return $$('#mortgageeType')[0]}

    get effectiveDate() { return $('#effectiveDate')}   

    // Validation error 
    get formError() { return $$('p + p')[5]}

    get goToCheckoutBtn() { return $('#proceedInsuredStepButton') }

    // sign in 
    get emailInput()    { return $('#email')}
    get passwordInput() { return $('#password')}
    get signInBtn()     { return $('#signInLoginModalButton')}
  
    getPageUrl() {
        return this.url;
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

    async selectPrimaryMortgageeState (state = 'FL'){
        await this.primaryState.waitForClick();
        let selectedState = `li[data-value="${state}"]`;
        await $(selectedState).waitForClick();
    }

    async selectPrimaryMortgageeType(primaryMortgagee = true){
        await this.primaryType.waitForClick();
        let selector = `li[data-value="${primaryMortgagee}"]`;
        await $(selector).waitForClick();
    }

    async chooseEffectiveDate(days) {
        let today = moment().subtract(days, 'days').calendar();
        await this.effectiveDate.clickAndSetVal(today);
    }

    async completePrimaryMortgagee({companyName, loanNumber, address, city, state, postalCode, isPrimaryMortgagee} = {}) {
        await this.mortgageeBtn.waitForClick();
        await this.primaryCompanyName.setVal(companyName);
        await this.primaryLoanNumber.setVal(loanNumber);
        await this.primaryAddress.setVal(address);
        await this.primaryCity.setVal(city);
        await this.selectPrimaryMortgageeState(state);
        await this.primaryPostal.setVal(postalCode);
        await this.selectPrimaryMortgageeType(isPrimaryMortgagee);
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
            case infoPageElements.infoFormError:
                selected = await this.formError;
                break;
            default:
                throw new Error(`${element} is not a valid element for ${this.pageId}`);
        }
        return selected;
    }

    async signIn({pwd} = {}) {
        this.waitForSpinner();
        await this.passwordInput.setVal(pwd);
        await this.signInBtn.waitForClick();
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
