const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
let passwordHash = require('password-hash');
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./dataBase.js');
//const verifyToken = require('./functions/verifyToken.js')
const verifyUser = require('./functions/verifyUser.js')

//app.use(cors());
//app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// const registreError = {
//     userNameErr: '',
//     firstNameErr: '',
//     lastNameErr: '',
//     emailErr: '',
//     passwordErr: '',
//     confirmPassErr: '',
// }
// app.post('/api/insert', (req, res) => {
//     const password = req.body.password
//     const userName = req.body.userName
//     const firstName = req.body.firstName
//     const lastName = req.body.lastName
//     const email = req.body.email
//     const confirmPass = req.body.confirmPass

//     const token = crypto.randomBytes(64).toString('hex');
//     const hashPass = passwordHash.generate(password);

//     /*---------------------------- emailErr ----------------------------*/
//     if (email === "")
//         registreError.emailErr = "email is empty"
//     else
//         if (verifyUser.checkUserByEmail(email)) {
//             registreError.emailErr = "email already used";
//         }
//     // insert
//     const sqlInsert = "INSERT INTO `user`(`firstName`, `lastName`, `userName`, `email`, `password`,`Token`) VALUES (?, ? , ? , ?, ?, ?)"
//     if (registreError.emailErr === "" && registreError.userNameErr === "" && registreError.firstNameErr === "" && registreError.lastNameErr === "" && registreError.passwordErr === "" && registreError.confirmPassErr === "") {
//         db.query(sqlInsert, [firstName, lastName, userName, email, hashPass, token], (err, result) => {
//             console.log(err);
//         });
//     }
//     else {
//         console.log(registreError.emailErr);
//     }
// });




app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }

    jwt.sign({ user }, 'secretkey' , (err, token) => {
        res.json({
            token
        });
    });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(200);
    }
}



app.listen(3001, (err, req) => { console.log("run in 3001") });