import { quoteToDollarInt } from '../../../utils/helpers';

class QuoteBox {

    get savingsAmount() { return $('#quote-container div:nth-of-type(2) div:nth-of-type(2) p')}
    get rewardsAmount() { return $('#quote-container div:nth-of-type(2) div:nth-of-type(3) p')}

    async getRewardAmountValue(){
        let val = await this.rewardsAmount.getVal();
        return parseInt(val);
    }

    async getSavingsAmountValue() {
        let val = await this.savingsAmount.getVal();
        const [sign,value] = val.split('$');
        return parseInt(value);
    }

}

export default new QuoteBox();