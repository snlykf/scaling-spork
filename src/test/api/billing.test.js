import {request, authRequest} from '../apiTest.js';

describe('Billing API', () => {
    it('should return list of plans', async () => {
        const response = await authRequest
            .get('/api/billing/plans')
            .expect(200);

            expect(response.text).toEqual('["Free","Pro","Enterprise"]');
    });
});
