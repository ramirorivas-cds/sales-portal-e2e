//All literals are declared here: addresses, names, phone numbers

const addresses = {
    redPathAddress : '3 California Ct, Seale, AL 36875-4843',
    greenPathAddress : '13024 Pechora Ct, Jacksonville, FL 32246-5501',
    yellowPathAddress : '1223 Tadsworth Ter, Lake Mary, FL 32746-5330'
}

const urls = {
    rewardPageUrl : 'https://test-app.openhouseinsurance.com/quote/rewards',
    kikoutPageUrl: 'https://test-app.openhouseinsurance.com/knockout',
    homePageUrl: 'https://test.openhouseinsurance.com',
    aboutUsPageUrl: 'https://test.openhouseinsurance.com/about-us',
    getStartedPageUrl: 'https://test.openhouseinsurance.com/get-started',
    ourInsurancePageUrl: 'https://test.openhouseinsurance.com/our-insurance',
    contactUsPageUrl: 'https://test.openhouseinsurance.com/contact-us',
    myAccountPageUrl: 'https://test-my.openhouseinsurance.com/',
    coveragePageUrl: 'https://test-app.openhouseinsurance.com/quote/coverages',
    infoPageUrl: 'https://test-app.openhouseinsurance.com/quote/insured',
    checkoutPageUrl: 'https://dev-app.openhouseinsurance.com/quote/disclosures',
    successPageUrl: 'https://test-app.openhouseinsurance.com/policy',
    bill2pay: 'https://insurance.qa.bill2pay.com/Payment.aspx',
}

const paths = {
    contactUs : '/contact-us',
    aboutUs: '/about-us',
    ourInsurance: '/our-insurance',
    getStarted: '/get-started',
}

const creditScoreLimitsVal = {
    low: 580,
    high: 800
}

const creditScoreValues = {
    worst: -500,
    poor: -455,
    fair: -230,
    good: -100,
    veryGood: -70,
    excellent: 70,
    exceptional: 230,
}

const primaryInsured = {

    completeUser: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1979',
        zipCode: '32835', 
        cardNumber: '4111 1111 1111 1111 11111',
        cardExpDate: '2 2025',
        cardCVV: '111'
    },

    completeUserOverSixty: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1959'
    },

    completeRepeatedUser: {
        firstName: 'Ramiro',
        lastName: 'Rivas',
        email: 'john139@testemail.com',
        phone: '1234561234',
        birthday: '12/12/1959',
        pwd: 'cdelsur1'
    },

    incompleteUser: {
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1979'
    },
}

const coApplicant = {

    completeCoApplicant: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1979'
    },

    completeCoApplicantOverSixty: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1959'
    },

    incompleteCoApplicant: {
        firstName: 'John',
        lastName: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        phone: '1234561234',
        birthday: '12/12/1979'
    }
}

const mortgagees = {
    completePrimaryMortgagee : {
        companyName: 'Testing Coorp',
        loanNumber: '123443',
        city: 'Orlando',
        state: 'FL',
        address: 'Fake Street 123',
        postalCode: '32835',
        isPrimaryMortgagee: true
    },

    incompletePrimaryMortgagee : {
        companyName: 'Testing Coorp',
        city: 'Orlando',
        state: 'FL',
        address: 'Fake Street 123',
        postalCode: '32835',
        isPrimaryMortgagee: true
    }
}

export const literals = {
    addresses,
    urls,
    paths,
    creditScoreLimitsVal,
    creditScoreValues,
    primaryInsured,
    coApplicant,
    mortgagees
}