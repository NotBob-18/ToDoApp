require("dotenv").config();

const { DB_URI, PORT, SECRET_ACCESS_TOKEN } = process.env;

module.exports = { DB_URI, PORT, SECRET_ACCESS_TOKEN };