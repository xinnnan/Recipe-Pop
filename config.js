require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "testdb",
        host: "localhost",
        dialect: "mysql",
        logging: false
    },
    production: {
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    }
};
