const mysql = require('mysql');
const db = mysql.createPool({
    host: "192.168.99.100",
    port: "3306",
    user: "ernesto",
    password: "ernesto",
    database: "matcha",
});
module.exports = db;