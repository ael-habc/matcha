const db = require('../dataBase.js');
function checkUserByEmail(email)
{
    const check = "SELECT `email` FROM `user` WHERE `email` = ?"
    if (db.query(check),[email], (err, res)=> {
        if (res) return 1
        else return 0;
    });
};
function checkUserByUserName(userName)
{
    const check = "SELECT `userName` FROM `user` WHERE `userName` = ?"
    if (db.query(check),[userName], (err, res)=> {
        if (res) return 1
        else return 0;
    });
};
exports.checkUserByEmail = checkUserByEmail;