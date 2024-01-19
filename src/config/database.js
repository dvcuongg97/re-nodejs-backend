require("dotenv").config();
const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "123456",
//   database: "hoidanit",
// });

// const connection = mysql.createPool({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "123456",
//   database: "hoidanit",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
