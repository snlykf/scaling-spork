const mockPlans = [
    'Free',
    'Pro',
    'Enterprise'
];

const mockInvoices = {
    'jdoe': {
        invoiceNr: 1,
        date: 'July 2024',
        amount: 20.37
    }
}

const getPlans = () => Promise.resolve(mockPlans);

const getInvoice = (user) => {
    let invoice = mockInvoices[user.username];

    if(invoice) {
        return Promise.resolve(invoice);
    } else {
        return Promise.reject(`No invoice for ${JSON.stringify(user)}`);
    }
}

export {
    getPlans,
    getInvoice
};