import config from '../wdio.conf';
import { expect as chaiExpect } from 'chai';
import world from '../world';

export const expectUrlToEqual = async (actualUrl = config.baseUrl) => {
    const url = await browser.getUrl();
    chaiExpect(url).to.equal(actualUrl);
}

export const expectTextToEq = async (actual,expected) => {
    chaiExpect(await actual).to.equal(expected);
}

export const expectTextToEqIgnoreCase = (actual,expected) => {
    chaiExpect(actual.toLowerCase()).to.equal(expected.toLowerCase());
}

export const expectQuoteTo = async (action,actualValue) => { 
    switch(action.toLowerCase()) {
        case 'increase':
            chaiExpect(parseInt(actualValue)).to.be.greaterThan(parseInt(world.quoteValue));
            break;
        case 'decrease':
            chaiExpect(parseInt(world.quoteValue)).to.be.greaterThan(parseInt(actualValue));
            break;
        case 'remains the same':
            chaiExpect(parseInt(world.quoteValue)).to.eq(parseInt(actualValue));
            break;
        default:
            throw new Error(`${action} is not a valid action`);

    }
}