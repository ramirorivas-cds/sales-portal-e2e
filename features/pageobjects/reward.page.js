import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import { isTrueSet } from '../../utils/helpers';

const {
    pagesIds,
    creditScoreLimits,
    rewardsLimits,
    ratedRewards,
    nonRatedRewards
} = enums;

const {
    rewardPageUrl
} = literals.urls;

class RewardPage extends Page {

    constructor() {
        super(pagesIds.salesReward, rewardPageUrl);
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
        await super.getQuote();
    }

    async waitForQuoteToChange() {
        await super.waitForQuoteToChange();
    }

    /**
 * @param {string} score: valid credit score from the creditScoreLimits enum 
 * @returns : a position in x to which drag & drop an element in the screen 
 */
    creditScoreMapper(score) {
        let creditScore;
        switch (score.toLowerCase()) {
            case creditScoreLimits.highest:
                creditScore = 230;
                break;
            case creditScoreLimits.lowest:
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
        switch (element) {
            case ratedRewards.burglarAalarm:
                selected = await this.burglarAlarmRwd;
                break;
            case ratedRewards.fireProtection:
                selected = await this.fireProtectionRwd;
                break;
            case ratedRewards.tanklessWaterHeater:
                selected = await this.tanklessWaterHeaterRwd;
                break;
            case ratedRewards.military:
                selected = await this.militaryRwd;
                break;
            case ratedRewards.waterDetectionShutoff:
                selected = await this.waterDetectionRwd;
                break;
            case ratedRewards.accreditedBuilder:
                selected = await this.accreditedBuilderRwd;
                break;
            case ratedRewards.overAgeSixty:
                selected = await this.ageOverSixtyRwd;
                break;
            case ratedRewards.securedCommunity:
                selected = await this.securedCommunityRwd;
                break;
            case ratedRewards.surgeProtection:
                selected = await this.surgeProtectionRwd;
                break;
            case ratedRewards.nonSmoker:
                selected = await this.nonSmokerRwd;
                break;
            case ratedRewards.openingProtection:
                selected = await this.hurricaneRwd;
                break;
            case nonRatedRewards.videoDoorBell:
                selected = await this.videoDoorBellRwd;
                break;
            case nonRatedRewards.highAcSeerRating:
                selected = await this.highAcSeerRatingRwd;
                break;
            case nonRatedRewards.fireExtinguisher:
                selected = await this.fireExtinguisherRwd;
                break;
            case nonRatedRewards.smartLock:
                selected = await this.smartLockRwd;
                break;
            case nonRatedRewards.solarPanel:
                selected = await this.solarPanelsRwd;
                break;
            case nonRatedRewards.pestControl:
                selected = await this.pestControlRwd;
                break;
            case nonRatedRewards.homeWarranty:
                selected = await this.homeWarrantyRwd;
                break;
            case nonRatedRewards.wholeHouse:
                selected = await this.wholeHouseRwd;
                break;
            case nonRatedRewards.hoaMember:
                selected = await this.hoaRwd;
                break;
            case nonRatedRewards.safeDriver:
                selected = await this.safeDriverRwd;
                break;
            case nonRatedRewards.purchasedLifeInsurance:
                selected = await this.purchasedInsuranceRwd;
                break;
            case nonRatedRewards.petOwner:
                selected = await this.petRwd;
                break;
            case nonRatedRewards.idTheftProtection:
                selected = await this.idTheftProtectionRwd;
                break;
            case nonRatedRewards.organDonor:
                selected = await this.organDonorRwd;
                break;
            case nonRatedRewards.smartThermostat:
                selected = await this.smartLockRwd;
                break;
            case nonRatedRewards.bloodDonor:
                selected = await this.bloodDonorRwd;
                break;
            case nonRatedRewards.gymMember:
                selected = await this.gymMemberRwd;
                break;
            case nonRatedRewards.smartDevices:
                selected = await this.smartDevicesRwd;
                break;
            case nonRatedRewards.rewardModal:
                selected = await this.rewardsModal;
                break;
            default:
                throw new Error(`${element} is not a valid element for ${this.pageId}`);
        }
        return selected;
    }

    async selectReward(reward) { 
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
        let i = rewardsLimits.nonRatedIndex;
        await this.quoteValue.waitForDisplayed();
        while((await super.getSavingsValue()) < rewardsLimits.nonRatedLimit) {
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