const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    dialectOptions: {
        ssl: dbConfig.dialectOptions.ssl
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.todos = require("./todoModel.js")(sequelize, Sequelize)
module.exports = db;