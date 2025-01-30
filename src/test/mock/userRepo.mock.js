import { jest } from '@jest/globals';

const mockTestUser = {
    username: 'test',
    firstName: 'Test',
    lastName: 'User',
    password: '098f6bcd4621d373cade4e832627b4f6' // 'test'
}

export default {
    getLoginUser: jest.fn(username => {
        if(username === mockTestUser.username) {
            return Promise.resolve(mockTestUser);
        } else {
            return Promise.reject('User not found');
        }
    })
}