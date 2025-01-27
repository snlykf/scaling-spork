import express from 'express';
import config from './config/config.js';
import expressConfig from './config/express.js';
import routes from './config/routes.js';

const setupExpressConfiguration = (express) => {
    express.enable('trust proxy');
    expressConfig(express, config);
};

const setupRoutesWithErrorHandling = (express) => {
    routes(express);

    // catch 404 and forward to error handler
    express.use((req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    // do not remove the fourth parameter "next" at the next line!!!
    express.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        let errorMessage = 'Status: ' + err.status + '; ERROR: ' + err.message;

        // add url if it's an http error with 404
        if (err.status === 404) {
            errorMessage += '; URL: ' + req.url;
        }

        // add the stracktrace if it isn't a http error with error code 401 or 404
        if (err.status !== 401 && err.status !== 404) {
            errorMessage += '; Stack: ' + err.stack;
        }

        console.debug(errorMessage);

        // render the error page
        res.status(err.status || 500).json(errorMessage);
    });
};

const app = express();
setupExpressConfiguration(app);
setupRoutesWithErrorHandling(app);


export default app;
