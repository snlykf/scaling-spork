const env = process.env;

export default {
    port: env.PROJECT_API_PORT || '8042',

    // JWT signing secret key
    jwtSecret: '5c167662a2c2f283627a2b02a34e83d1'
};
