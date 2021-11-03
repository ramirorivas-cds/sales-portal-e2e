import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';

const {
    salesCoverages
} = enums.pagesIds;

const {
    coveragePageUrl
} = literals.urls;

class CoveragePage extends Page {

    constructor() {
        super(salesCoverages, coveragePageUrl);
    }

    // Prior losses section
    get priorLossesNo()     { return $('#commonNoCoveragesCheckbox-container')}
    get priorLossesYes()    { return $('#commonYesCoveragesCheckbox-container')}
    get addDetailsBtn()     { return $('#addDetailsClaimsButton')}
    get claimTypeDropdown() { return $('#claimType')}
    get claimsTypesOpt()    { return $('li[data-value]')}
    get dateOfClaim()       { return $('input#claimDate')}
    get claimSaveBtn()      { return $('#clearClaimsButton')}
    get claimCancelBtn()    { return $('#cancelClaimsButton')}

    // Choose your plan 
    get monthlyQuoteSwitcher()  { return $('#isMonthlySwitch')}

    // Quote options 
    get recommendedQuote()      { return $('#recommended')}
    get reviewAndCustomizeBtn() { return $('#recommended #coverageCardButton')}

    
    getPageUrl() {
        return this.url;
    }




    

}

export default new CoveragePage();