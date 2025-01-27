import jwt from 'jsonwebtoken';

// Dummy secret used for API tests
export const jwtSecret = '123';

export const credentials = {
    username: 'jdoe',
    password: 'hunter2'
};

export const token = jwt.sign({loginName: credentials.user}, jwtSecret, {expiresIn: "10 minutes"});
