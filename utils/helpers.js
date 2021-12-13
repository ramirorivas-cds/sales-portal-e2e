
import moment from 'moment';


export const isTrueSet = myVal => (myVal.toLowerCase === 'true');

// returns the value of the quote 
export const quoteToDollarInt = val => {
    [val] = val.split('.');
    val = (val.split('$'))[1];
    const [thousands,hundreds] = val.split(',');
    return (thousands + hundreds);
}

// returns a date in DD/MM/YYYY format
export const dateFormatter = date => moment(date).format('DD/MM/YYYY');
