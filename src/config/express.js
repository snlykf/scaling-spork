import cors from 'cors';
import hsts from 'hsts';
import compression from 'compression';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';

const publicRoutes = [
    /\/health\/.*/,
    '/api/authentication',
];

export default function (app, config) {
    app.locals.secretKey = config.jwtSecret;

    app.use(compression());
    app.use(cors());
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(expressJwt({
        secret: config.jwtSecret,
        algorithms: ['sha1', 'RS256', 'HS256']
    }).unless({
        path: publicRoutes
    }));
    app.use(hsts({
        maxAge: 15552000, /* 180 days in seconds */
        includeSubDomains: false
    }));
}
