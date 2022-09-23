module.exports = {
    HOST: "ec2-18-209-78-11.compute-1.amazonaws.com",
    USERNAME: "fizqusjjeofvgy",
    PASSWORD: "90f205ab000ecff60cc9063ff55078769c5932f40ac69fd7ad7ec4b51b5d5ba2",
    DB: "d1slojm0dalaqa",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
    }
}