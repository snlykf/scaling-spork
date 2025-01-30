import {jest} from '@jest/globals';
import supertest from 'supertest';
import config from '../config/config.js';
import {token, jwtSecret} from './mock/auth.mock.js';
import userRepoMock from './mock/userRepo.mock.js';

// Use dummy JWT secret during tests
jest.replaceProperty(config, 'jwtSecret', jwtSecret);

jest.unstable_mockModule('../repos/userRepo.js', () => userRepoMock);

const app = await import('../app.js');

// Disable console logging during tests
const log = jest.spyOn(console._stdout, "write").mockImplementation(() => {});

const withAuth = (request) => {
    return request.set('Authorization', 'Bearer ' + token);
};

// A normal 'supertest' request
export const request = supertest(app.default);

// An authenticated request with the dummy JWT token
export const authRequest = {
    get: (url) => withAuth(request.get(url)),
    post: (url) => withAuth(request.post(url)),
};
