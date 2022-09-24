require('dotenv').config()
const ENV = process.env

module.exports = {
    HOST: ENV.HOST_DB,
    USERNAME: ENV.USERNAME_DB,
    PASSWORD: ENV.PASSWORD_DB,
    DB: ENV.NAME_DB,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
    }
}