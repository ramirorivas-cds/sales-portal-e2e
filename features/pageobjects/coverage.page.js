import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import world, { hasPriorLosses, isCoverageModalOpened } from '../../world';
import { quoteToDollarInt } from '../../utils/helpers';

const {
    pagesIds,
    coverageType
} = enums;

const {
    urls,
    creditScoreLimitsVal
} = literals;

class CoveragePage extends Page {

    constructor() {
        super(pagesIds.salesCoverages, urls.coveragePageUrl);
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

    // Coverages 
    get dwelling() { return $('#dwelling span[role="slider"]')}

    
    getPageUrl() {
        return this.url;
    }

    async selectPriorLosses(hasPriorLosses = false) {
        const priorLossOpt = hasPriorLosses ? await this.priorLossesYes : await this.priorLossesNo;
        await priorLossOpt.waitForClick();
    } 

    async selectCoverageOption(option = coverageType.recommended) {
        let selected; 
        switch(option.toLowerCase()) {
            case coverageType.basic:
                selected = await this.reviewBasicBtn;
                break;
            case coverageType.recommended:
                selected = await this.reviewRecommendedBtn;
                break;
            case coverageType.luxury:
                selected = await this.reviewLuxuryBtn;
                break;
            default:
                throw new Error(`${option} is not a valid coverage type to choose`);
        }
        await selected.waitForClick();
    }

    async selectDefaultCoverageOptions() {
        await this.selectPriorLosses();
        await this.selectCoverageOption();
    }

    async getQuote() {
        return await super.getQuote();
    }

    async waitForQuoteToChange() {
        await super.waitForQuoteToChange();
    }

    async moveDwelling(action){
        let x;
        world.quoteValue = quoteToDollarInt(await super.getQuote());
        await this.dwelling.scrollIntoView(true); 
        action === 'increase' ? x = 400 : x = -230; 
        await this.dwelling.waitForDropped({ x: x, y: 0 });

    }

    async goToNextPage(priorLosses = hasPriorLosses) { //to-do add condition for prior losses 
        if(!isCoverageModalOpened) {
            await this.selectPriorLosses(priorLosses);
            await this.selectCoverageOption();
        }
        await this.continueToInfoBtn.waitForClick();
    }    

}

export default new CoveragePage();