const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({
    host: "192.168.99.100",
    port: "3306",
    user: "ernesto",
    password: "ernesto",
    database: "matcha",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/api/insert', (req, res) => {
    const login = req.body.login
    const password = req.body.password
    const sqlInsert = "INSERT INTO user (login, password) VALUES (?,?)"
    db.query(sqlInsert,[login, password], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, (err , req) => {
    console.log("run in 3001");
});