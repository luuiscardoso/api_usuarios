const mysql = require ('mysql2/promise');
require('dotenv').config();

console.log(process.env.MYSQL_DB)
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.MYSQL_PORT)
console.log(process.env.MYSQL_USER)

const conexao = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
});

module.exports = conexao;