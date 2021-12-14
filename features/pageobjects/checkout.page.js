import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";
import { config } from "../../wdio.conf";

const {
    pagesIds,
    paymentType,
    entities
} = enums;

const {
    checkoutPageUrl
} = literals.urls;

class CheckoutPage extends Page {

    constructor() {
        super(pagesIds.salesCheckout,checkoutPageUrl);
    }

    get sinkHoleExclusionCheck()    { return $('#sinkholeExclusionCheckbox-container div.sinkholeExclusionCheckbox')}
    get floodExclusionCheck()       { return $('#floodExclusionCheckbox-container div.floodExclusionCheckbox')}
    get applicationSignatureCheck() { return $('#termsConfirmationCheckbox-container div.termsConfirmationCheckbox')}
    get signConsentCheck()          { return $('#termsESingConfirmationCheckbox-container div.termsESingConfirmationCheckbox')}
    get selfInspectionCheck()       { return $('#selfInspectionCheckbox-container div.selfInspectionCheckbox')}

    get textSignatureBtn() { return $('p .MuiSwitch-root')}
    get signatureInput()   { return $('input[type="text"]')}
    get saveSignature()    { return $('#saveSignatureButton')}
    
    get paymentEleven()    { return $$('.MuiBox-root.false')[0]}
    get paymentMortgagee() { return $$('.MuiBox-root.false')[1]}
    get paymentFull()      { return $('.false + div')}

    get buyPolicyBtn() { return $('#continuePaymentButton')}
    get buyAppBtn()    { return $('#continueConfirmationButton')}
    
    getPageUrl() {
        return this.url;
    }

    async completeDisclosures(entity = entities.policy) {
        await this.sinkHoleExclusionCheck.waitForClick({timeout: 30000});
        await this.floodExclusionCheck.waitForClick();
        if (entity === entities.application) await this.selfInspectionCheck.waitForClick();
        await this.applicationSignatureCheck.waitForClick();
        await this.signConsentCheck.waitForClick();
    }

    async completeSignature({firstName} = {}){
        await this.textSignatureBtn.waitForClick();
        await this.signatureInput.setVal(firstName);
        await this.saveSignature.waitForClick();
    }

    async choosePaymentType(chosenPaymentType){
        let payment;
        switch(chosenPaymentType.toLowerCase()) {
            case paymentType.mortgagee:
                payment = await this.paymentMortgagee;
                break;
            case paymentType.fullPay:
                payment = await this.paymentFull;
                break;
            case paymentType.elevenPay:
                payment = await this.paymentEleven;
                break;
            default:
                throw new Error(`${chosenPaymentType} is not a valid payment type`);
        }
        await payment.waitForClick();
    }

    async goToNextPage(entity = entities.policy) {
       if (entity === entities.policy) {
            await this.buyPolicyBtn.waitForClick();
            this.waitForSpinner();
       } else {
            await this.buyAppBtn.waitForClick();
       }
    }   
}

export default new CheckoutPage();