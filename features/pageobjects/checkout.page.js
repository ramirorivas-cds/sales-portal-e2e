import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from "../../utils/enums";

const {
    checkoutPageUrl
} = literals.urls;

const {
    salesCheckout
} = enums.pagesIds;

const {
    mortgagee,
    fullPay,
    elevenPay
} =enums.paymentType;

class CheckoutPage extends Page {

    constructor() {
        super(salesCheckout,checkoutPageUrl);
    }

    get sinkHoleExclusionCheck()    { return $('#sinkholeExclusionCheckbox-container div.sinkholeExclusionCheckbox')}
    get floodExclusionCheck()       { return $('#floodExclusionCheckbox-container div.floodExclusionCheckbox')}
    get applicationSignatureCheck() { return $('#termsConfirmationCheckbox-container div.termsConfirmationCheckbox')}
    

    get textSignatureBtn() { return $('p .MuiSwitch-root')}
    get signatureInput()   { return $('input[type="text"]')}
    get saveSignature()    { return $('#saveSignatureButton')}
    
    get paymentMortgagee() { return $$('.MuiBox-root.false')[1]}

    get buyPolicyBtn() { return $('#continuePaymentButton')}
    
    getPageUrl() {
        return this.url;
    }

    async completeDisclosures() {
        await this.sinkHoleExclusionCheck.waitForClick();
        await this.floodExclusionCheck.waitForClick();
        await this.applicationSignatureCheck.waitForClick();
    }

    async completeSignature({firstName} = {}){
        await this.textSignatureBtn.waitForClick();
        await this.signatureInput.setVal(firstName);
        await this.saveSignature.waitForClick();
    }

    async choosePaymentType(paymentType){
        let payment;
        switch(paymentType.toLowerCase()) {
            case mortgagee:
                payment = await this.paymentMortgagee;
                break;
            default:
                throw new Error(`${paymentType} is not a valid payment type`);
        }
        await payment.waitForClick();
    }

    async goToNextPage() {
        await this.buyPolicyBtn.waitForClick();
        this.waitForSpinner();
    }
    
}

export default new CheckoutPage();