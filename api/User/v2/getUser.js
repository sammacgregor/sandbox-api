'use strict';
var sql = require('../../db.js');

exports.getUser = function (req, res) {
    let UserID = req.params.UserID;

    if (!UserID) {
        return res.status(400).send({ error: true, message: 'Please provide UserID' });
    }


    sql
        .query("Select * from System.User WHERE User_ID = $1", [UserID])
        .then(result => {
            return res.send({ error: false, data: result.rows, message: 'getUser' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'getUser' })
        })
};
