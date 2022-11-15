require("dotenv").config();
const {DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME, DB_DIALECT} = process.env;
module.exports = {
  local: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    port: 3306,
    dialect: DB_DIALECT,
  },
  development: {
    username: "user_dev",
    password: process.env.DB_PASSWORD,
    database: "tpa_05",
    host: "DB_HOSTNAME",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "user_prod",
    password: process.env.DB_PASSWORD,
    database: "tpa_05",
    host: "database.production.internet.com",
    port: 3306,
    dialect: "mysql",
  },
};

