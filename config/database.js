require("dotenv").config();

module.exports = {
  testing: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
    timezone: "+08:00",
  },
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
    timezone: "+08:00",
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
    timezone: "+08:00",
  },
};
