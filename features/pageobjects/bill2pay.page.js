import Page from "./page";
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import { config } from "../../wdio.conf";

const {
    pagesIds
} = enums;

const {
    urls
} = literals;

class Bill2Pay extends Page {

    constructor() {
        super(pagesIds.salesBill2Pay,urls.bill2pay);
    }

    get firstName()         { return $$('#txtCreditFirstName')[0]}
    get lastName()          { return $$('#txtCreditLastName')[0]}
    get zipCode()           { return $$('#txtBillingZip')[0]}
    get creditCard()        { return $$('#txtCreditCardNumber')[0]}
    get expDate()           { return $$('#txtExpireDate')[0]}
    get cvv()               { return $$('#txtCCV')[0]}
    get termsAndCondition() { return $$('#chkCCTermsAgree')[0]}
    get paymentMethod()     { return $$('#chkSavePaymentMethodCCRequired')[0]}

    get submitBtn()         { return $('#btnSubmitCredit')}

    async completeCard({firstName, lastName, zipCode, cardNumber, cardExpDate, cardCVV} = {}) {
        await browser.waitUntil(async () => {
             return (await this.firstName.isDisplayed());
        }, {timeout: config.timeout.XXL, interval: 500 });
        let error = await $('input[data-original-title]');
        
        do {
            await this.firstName.setVal(firstName);
            await this.lastName.setVal(lastName);
            await this.zipCode.setVal(zipCode);
            await this.creditCard.clickAndSetVal(cardNumber);
            await this.cvv.setVal(cardCVV);
            await this.expDate.clickAndSetVal(cardExpDate);
            await this.termsAndCondition.waitForClick();
            await this.paymentMethod.waitForClick();
            await this.submitBtn.waitForClick();
         } while (await error.isDisplayed());
    }
    

}

export default new Bill2Pay();