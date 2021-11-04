import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import { isTrueSet } from '../../utils/helpers';

const {
    salesReward
} = enums.pagesIds;

const {
    rewardPageUrl
} = literals.urls;

const {
    highest,
    lowest
} = enums.creditScoreLimits

const {
    nonRatedIndex,
    nonRatedLimit
} = enums.rewardsLimits

const {
    burglarAalarm,
    fireProtection,
    tanklessWaterHeater,
    waterDetectionShutoff,
    accreditedBuilder,
    overAgeSixty,
    securedCommunity,
    surgeProtection,
    nonSmoker,
    openingProtection,
    military
} = enums.ratedRewards;

const {
    videoDoorBell,
    highAcSeerRating,
    fireExtinguisher,
    smartDevices,
    smartLock,
    smartThermostat,
    solarPanel,
    pestControl,
    hoaMember,
    safeDriver,
    organDonor,
    bloodDonor,
    gymMember,
    idTheftProtection,
    wholeHouse,
    homeWarranty,
    purchasedLifeInsurance,
    petOwner,
    rewardModal
} = enums.nonRatedRewards

class RewardPage extends Page {

    constructor() {
        super(salesReward, rewardPageUrl);
    }

    // Credit score
    get creditScoreSlider() { return $('span[role="slider"]') }
    get creditScoreValue()  { return $('.MuiSlider-valueLabel span span') }

    get rewards()           { return $$('.MuiBox-root img.opacityImg')}

    // Rated rewards
    get burglarAlarmRwd()        { return $('img[src*="BURGLAR_ALARM"]') }
    get fireProtectionRwd()      { return $('img[src*="FIRE_PROTECTION"]') }
    get tanklessWaterHeaterRwd() { return $('img[src*="TANKLESS_WATER_HEATER"]') }
    get waterDetectionRwd()      { return $('img[src*="WATER_DETECTION_SHUTOFF"]') }
    get accreditedBuilderRwd()   { return $('img[src*="ACCREDITED_BUILDER"]') }
    get ageOverSixtyRwd()        { return $('img[src*="OVER_AGE_60"]') }
    get securedCommunityRwd()    { return $('img[src*="SECURED_COMMUNITY"]') }
    get surgeProtectionRwd()     { return $('img[src*="SURGE_PROTECTION"]') }
    get nonSmokerRwd()           { return $('img[src*="NON_SMOKER"]') }
    get hurricaneRwd()           { return $('img[src*="OPENING_PROTECTION"]') }
    get militaryRwd()            { return $('img[src*="MILITARY"]') }

    // Non-rated rewards
    get videoDoorBellRwd()      { return $('img[src*="VIDEO_DOOR_BELL"]') }
    get highAcSeerRatingRwd()   { return $('img[src*="HIGH_AC_SEER_RATING"]') }
    get fireExtinguisherRwd()   { return $('img[src*="FIRE_EXTINGUISHER"]') }
    get smartLockRwd()          { return $('img[src*="SMART_LOCK"]') }
    get solarPanelsRwd()        { return $('img[src*="SOLAR_PANELS"]') }
    get pestControlRwd()        { return $('img[src*="PEST_CONTROL_SERVICE"]') }
    get homeWarrantyRwd()       { return $('img[src*="HOME_WARRANTY"]') }
    get wholeHouseRwd()         { return $('img[src*="WHOLE_HOUSE_GENERATOR"]') }
    get hoaRwd()                { return $('img[src*="HOME_OWNERS_ASSOCIATION"]') }
    get safeDriverRwd()         { return $('img[src*="SAFE_DRIVER"]') }
    get safeDriverRwd()         { return $('img[src*="SAFE_DRIVER"]') }
    get safeDriverRwd()         { return $('img[src*="SAFE_DRIVER"]') }
    get purchasedInsuranceRwd() { return $('img[src*="PURCHASED_LIFE_INSURANCE"]') }
    get petRwd()                { return $('img[src*="PET_OWNER"]') }
    get idTheftProtectionRwd()  { return $('img[src*="ID_THEFT_PROTECTION"]') }
    get organDonorRwd()         { return $('img[src*="ORGAN_DONOR"]') }
    get smartThermostatRwd()    { return $('img[src*="SMART_THERMOSTAT"]') }
    get bloodDonorRwd()         { return $('img[src*="BLOOD_DONOR"]') }
    get gymMemberRwd()          { return $('img[src*="GYM_MEMBER"]') }
    get smartDevicesRwd()       { return $('img[src*="SMART_DEVICES"]') }
    get rewardsModal()          { return $('[role="dialog"]')}
    get modalCloseBtn()         { return $('h2 button')}

    get quoteValue()            { return $('h3 span:first-child') }

    get goToRewardsBtn()        { return $('#nextQuoteWizardButton')}

    getPageUrl() {
        return this.url;
    }

    async getQuote() {
        return await this.quoteValue.getVal();
    }

    async waitForQuoteToChange() {
        await this.quoteValue.waitForValueToChange();
    }

    /**
 * @param {string} score: valid credit score from the creditScoreLimits enum 
 * @returns : a position in x to which drag & drop an element in the screen 
 */
    creditScoreMapper(score) {
        let creditScore;
        switch (score.toLowerCase()) {
            case highest:
                creditScore = 230;
                break;
            case lowest:
                creditScore = -500;
                break;
            default:
                throw new Error(`${score} is not a valid score`);
        }
        return creditScore;
    }

    async selectCreditScore(creditScore) {
        let x = await this.creditScoreMapper(creditScore);
        await this.creditScoreSlider.waitForDropped({ x: x, y: 0 });
    }

    async getCreditScore() {
        return await this.creditScoreValue.getVal();
    }

    /**
     * 
     * @param {string} element: the name of an element accoring to the enums
     * @returns an actual element associated to that string 
     */
    async elementSwitcher(element) {
        let selected;
        switch (element.toLowerCase()) {
            case burglarAalarm:
                selected = await this.burglarAlarmRwd;
                break;
            case fireProtection:
                selected = await this.fireProtectionRwd;
                break;
            case tanklessWaterHeater:
                selected = await this.tanklessWaterHeaterRwd;
                break;
            case military:
                selected = await this.militaryRwd;
                break;
            case waterDetectionShutoff:
                selected = await this.waterDetectionRwd;
                break;
            case accreditedBuilder:
                selected = await this.accreditedBuilderRwd;
                break;
            case overAgeSixty:
                selected = await this.ageOverSixtyRwd;
                break;
            case securedCommunity:
                selected = await this.securedCommunityRwd;
                break;
            case surgeProtection:
                selected = await this.surgeProtectionRwd;
                break;
            case nonSmoker:
                selected = await this.nonSmokerRwd;
                break;
            case openingProtection:
                selected = await this.hurricaneRwd;
                break;
            case videoDoorBell:
                selected = await this.videoDoorBellRwd;
                break;
            case highAcSeerRating:
                selected = await this.highAcSeerRatingRwd;
                break;
            case fireExtinguisher:
                selected = await this.fireExtinguisherRwd;
                break;
            case smartLock:
                selected = await this.smartLockRwd;
                break;
            case solarPanel:
                selected = await this.solarPanelsRwd;
                break;
            case pestControl:
                selected = await this.pestControlRwd;
                break;
            case homeWarranty:
                selected = await this.homeWarrantyRwd;
                break;
            case wholeHouse:
                selected = await this.wholeHouseRwd;
                break;
            case hoaMember:
                selected = await this.hoaRwd;
                break;
            case safeDriver:
                selected = await this.safeDriverRwd;
                break;
            case purchasedLifeInsurance:
                selected = await this.purchasedInsuranceRwd;
                break;
            case petOwner:
                selected = await this.petRwd;
                break;
            case idTheftProtection:
                selected = await this.idTheftProtectionRwd;
                break;
            case organDonor:
                selected = await this.organDonorRwd;
                break;
            case smartThermostat:
                selected = await this.smartLockRwd;
                break;
            case bloodDonor:
                selected = await this.bloodDonorRwd;
                break;
            case gymMember:
                selected = await this.gymMemberRwd;
                break;
            case smartDevices:
                selected = await this.smartDevicesRwd;
                break;
            case rewardModal:
                selected = await this.rewardsModal;
                break;
            default:
                throw new Error(`${element} is not a valid element for ${this.pageId}`);
        }
        return selected;
    }

    async selectReward(reward) { //TO-DO: export browser.execute function to custom commands
        let selectedReward = await this.elementSwitcher(reward); 
        await selectedReward.scrollIntoView(true); 
        await browser.execute(async (element) => { 
            await element.click();
        }, selectedReward);
    }

    async getQuoteBoxRewardAmount() {
        return await super.getRewardsAmount();
    }

    async selectRewardUntil(){
        let i = nonRatedIndex;
        await this.quoteValue.waitForDisplayed();
        while((await super.getSavingsValue()) < nonRatedLimit) {
            await this.rewards[i].waitForClick();
            await this.waitForQuoteToChange();  
            i++;  
        }  
    }

    async closeModal() {
        await this.modalCloseBtn.waitForClick();
    }

    async screenValidation(element, reverse) {
        let selected = await this.elementSwitcher(element);
        await selected.waitForDisplayed({ reverse: isTrueSet(reverse) });
    }

    async goToNextPage() {
        await this.quoteValue.waitForDisplayed();
        await this.goToRewardsBtn.waitForClick();
        await super.waitForSpinner();
    }

}

export default new RewardPage();