import {request, authRequest} from '../apiTest.js';

describe('Billing API', () => {
    it('should return list of plans', async () => {
        const response = await authRequest
            .get('/api/billing/plans')
            .expect(200);

            expect(response.text).toEqual('["Free","Pro","Enterprise"]');
    });

    it('should return list of plans', async () => {
        await authRequest
            .get('/api/billing/jdoe/invoice')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8');
    });

    it('should return the invoice as PDF', async () => {
        await authRequest
            .get('/api/billing/test/invoicePdf')
            .expect(200)
            .expect('Content-Type', /application\/octet-stream/)
            .expect('Content-disposition', /attachment; filename=invoice.pdf/);
    });
});
