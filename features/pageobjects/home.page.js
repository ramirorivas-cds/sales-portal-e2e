import Page from './page';
import { enums } from '../../utils/enums';
import { literals } from '../../utils/literals'; 

const {
    redPath,
    yellowPath,
    greenPath
} = enums.pathTypes;

const {
    aboutUsPage,
    ourInsurancePage,
    myAccountPage,
    contactUsPage,
    getStartedPage
} = enums.salesSections;

const {
    redPathAddress,
    greenPathAddress,
    yellowPathAddress
} = literals.addresses;

const {
    contactUs,
    aboutUs,
    ourInsurance,
    getStarted
} = literals.paths;

const { homePageUrl } = literals.urls; 

class HomePage extends Page {

    //to-do: move literals to file 
    constructor() {
        super('Sales Home Page',homePageUrl);
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
    get getStartedBtn()   { return $(`a[href="${getStarted}"]`) }
    get ourInsuranceBtn() { return $(`a[href="${ourInsurance}"]`) }
    get aboutUsBtn()      { return $(`a[href="${aboutUs}"]`) }
    get contactUsBtn()    { return $(`a[href="${contactUs}"]`) }
    
    open () {
        return super.open('/');
    }

    async completeAddress(address){
        let val; 
        switch(address.toLowerCase()){
            case redPath:
                val = redPathAddress;
                break;
            case yellowPath:
                val = yellowPathAddress;
                break;
            case greenPath:
                val = greenPathAddress;
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

    async goToNextPage() {
        await this.getMyQuoteBtn.waitForClick();
        await super.waitForSpinner();
    }

    async goToSection(section) {
        let element;
        switch(section.toLowerCase()) {
            case aboutUsPage:
                element = await this.aboutUsBtn;
                break;
            case getStartedPage:
                element = await this.getStartedBtn;
                break;
            case ourInsurancePage:
                element = await this.ourInsuranceBtn;
                break;
            case contactUsPage:
                element = await this.contactUsBtn;
                break;
            default:
                throw new Error(`${section} is not a valid section within the ${this.pageId}`);
        }
        await element.waitForClick();
    }

}

export default new HomePage();
