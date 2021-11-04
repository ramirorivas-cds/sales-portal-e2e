import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import { hasPriorLosses, isCoverageModalOpened } from '../../world';

const {
    salesCoverages
} = enums.pagesIds;

const {
    coveragePageUrl
} = literals.urls;

const {
    basic,
    recommended,
    luxury
} = enums.coverageType

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
    get reviewRecommendedBtn()  { return $('#recommended .coverageCardButton')}

    get basicQuote()            { return $('#basic')}
    get reviewBasicBtn()        { return $('#basic .coverageCardButton')}

    get luxuryQuote()           { return $('#luxury')}
    get reviewLuxuryBtn()       { return $('#luxury .coverageCardButton')}


    // Modal 
    get continueToInfoBtn() { return $('#continueEndorsementsModalButton')};

    
    getPageUrl() {
        return this.url;
    }

    async selectPriorLosses(hasPriorLosses = false) {
        const priorLossOpt = hasPriorLosses ? await this.priorLossesYes : await this.priorLossesNo ;
        await priorLossOpt.waitForClick();
    } 

    async selectCoverageOption(option = recommended) {
        let selected; 
        switch(option.toLowerCase()) {
            case basic:
                selected = await this.reviewBasicBtn;
                break;
            case recommended:
                selected = await this.reviewRecommendedBtn;
                break;
            case luxury:
                selected = await this.reviewLuxuryBtn;
                break;
            default:
                throw new Error(`${option} is not a valid coverage type to choose`);
        }
        await selected.waitForClick();
    }

    async goToNextPage(priorLosses = hasPriorLosses) {
        if(!isCoverageModalOpened) {
            await this.selectPriorLosses(priorLosses);
            await this.selectCoverageOption();
        }
        await this.continueToInfoBtn.waitForClick();
    }




    

}

export default new CoveragePage();