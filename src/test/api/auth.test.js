import {request, authRequest} from '../apiTest.js';
import { credentials } from '../mock/auth.mock.js';

describe('Authentication', () => {
    it('should reject without JWT token', async () => {
        const response = await request
            .post('/api/billing/plans')
            .expect(401);
    });

    it('should reject unknown users', async () => {
        const response = await authRequest
            .post('/api/authentication')
            .send({ username: 'foo', password: 'bar'})
            .expect(401);

        expect(response.text).toEqual('"User not found"');
    });

    it('should authenticate users', async () => {
        const response = await request
            .post('/api/authentication')
            .send(credentials)
            .expect(200)
            .expect('Content-Type', /json/);

        expect(response.body.token).toBeDefined();
    });
});
