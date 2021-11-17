import { quoteValue } from "../world";

export const isTrueSet = myVal => (myVal.toLowerCase === 'true');

export const quoteToDollarInt = val => {
    [val] = val.split('.');
    val = (val.split('$'))[1];
    const [thousands,hundreds] = val.split(',');
    return (thousands + hundreds);
}