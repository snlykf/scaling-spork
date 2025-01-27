import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import * as users from '../repos/userRepo.js';

const JwtExpiration = '12 hours';

export function check(req, res) {
    users.getLoginUser(req.body.username).then(function (user) {
        const hash = getPasswordHash(req.body.password);
        if(hash === user.password) {
            return user;
        } else {
            throw new Error('Invalid password');
        }
    }).then(function (user) {
        const token = jwt.sign(user, req.app.locals.secretKey, {expiresIn: JwtExpiration});
        res.json({'token': token});
    }).catch(function (err) {
        res.status(401).json(err);
    });
}

function getPasswordHash(plain) {
    const hash = crypto.createHash('md5').update(plain).digest('hex');
    return hash;
}