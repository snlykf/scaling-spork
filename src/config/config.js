const env = process.env;

export default {
    port: env.PROJECT_API_PORT || '8042',

    // JWT signing secret key
    jwtSecret: ''
};
