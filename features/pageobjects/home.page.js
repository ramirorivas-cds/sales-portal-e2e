import Page from './page';
import { enums } from '../../utils/enums';
import { literals } from '../../utils/literals'; 

const {
    salesSections,
    pathTypes,
    pagesIds
} = enums;

const {
    paths,
    addresses
} = literals

const { homePageUrl } = literals.urls; 

class HomePage extends Page {

    constructor() {
        super(pagesIds.salesHomeId,homePageUrl);
    }

    getPageUrl() {
        return this.url;
    }

    //Getters of the elements of the page 
    get addressInput()  { return $('#address') }
    get firstAddress()  { return $('ul[role="menu"] li') }
    get checkBox()      { return $('#acceptConditionsSearchAddressCheckbox-container') }
    get getMyQuoteBtn() { return $('button[type="button"]') }
 
    //Nav Bar items 
    get getStartedBtn()   { return $(`a[href="${paths.getStarted}"]`) }
    get ourInsuranceBtn() { return $(`a[href="${paths.ourInsurance}"]`) }
    get aboutUsBtn()      { return $(`a[href="${paths.aboutUs}"]`) }
    get contactUsBtn()    { return $(`a[href="${paths.contactUs}"]`) }
    
    open () {
        return super.open('/');
    }

    async completeAddress(address){
        let val; 
        switch(address.toLowerCase()){
            case pathTypes.redPath:
                val = addresses.redPathAddress;
                break;
            case pathTypes.yellowPath:
                val = addresses.yellowPathAddress;
                break;
            case pathTypes.greenPath:
                val = addresses.greenPathAddress;
                break;
            default:
                throw new Error(`${address} is not a valid path`);
        }
        await this.addressInput.setVal(val);
        await this.firstAddress.waitForClick();
    }

    async completeAddressAndContinue (address) {
        await this.completeAddress(address);
        await this.checkDisclosure();
        await this.goToNextPage();
    }

    async checkDisclosure() {
        await this.checkBox.waitForClick();
    }

    async goToSection(section) {
        let element;
        switch(section.toLowerCase()) {
            case salesSections.aboutUsPage:
                element = await this.aboutUsBtn;
                break;
            case salesSections.getStartedPage:
                element = await this.getStartedBtn;
                break;
            case salesSections.ourInsurancePage:
                element = await this.ourInsuranceBtn;
                break;
            case salesSections.contactUsPage:
                element = await this.contactUsBtn;
                break;
            default:
                throw new Error(`${section} is not a valid section within the ${this.pageId}`);
        }
        await element.waitForClick();
    }
    
    async goToNextPage() {
        await this.getMyQuoteBtn.waitForClick();
        await super.waitForSpinner();
    }
}

export default new HomePage();
