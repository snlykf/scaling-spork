import { jest } from '@jest/globals';

const mockInvoices = {
    'test': {
        invoiceNr: 42,
        date: 'July 2032',
        amount: 3.69
    }
}

const mockPlans = ['Free', 'Non-free'];

export default {
    getPlans: jest.fn(() => {
        return Promise.resolve(mockPlans);
    }),
    getInvoice: jest.fn(user => {
        let invoice = mockInvoices[user.username];

        if(invoice) {
            return Promise.resolve(invoice);
        } else {
            return Promise.reject(`No invoice for ${JSON.stringify(user)}`);
        }
    })
}