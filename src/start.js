import http from 'http';

import config from './config/config.js';
import app from './app.js';

const startHttpsNodeServer = (expressHandle) => {
    const server = http.createServer(expressHandle);

    server.listen(config.port, () => {
        console.info('Express server listening on port ' + config.port);
    });
};

startHttpsNodeServer(app);
