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
    action === 'increases'
        ? chaiExpect(parseInt(actualValue)).to.be.greaterThan(parseInt(world.quoteValue))
        : chaiExpect(parseInt(world.quoteValue)).to.be.greaterThan(parseInt(actualValue));
}