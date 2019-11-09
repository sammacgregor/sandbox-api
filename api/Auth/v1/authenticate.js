'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

var userModel = require('../../User/v2/appModel')
var authModel = require('./appModel.js');

var sql = require('../../db.js');


exports.authenticate = function (req, res) {
    var newAuth = new authModel(req.body);

    //handles null error 
    if (!newAuth.email || !newAuth.password) {
        console.log(JSON.stringify(req.body));
        res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

    }
    else {

        sql
            .query("SELECT * FROM System.User WHERE Email = $1", [newAuth.email])
            .then(result => {
                var user = new userModel(result.rows[0]);

                bcrypt.compare(user.password, newAuth.password)
                    .then(function (res) {
                        return res.send({ error: false, data: {user_id: user.user_id}, message: 'authenticate' })
                        // res == true
                    })
                    .catch(
                        res.send({ error: true, message: 'authenticate' })
                    );


            })
            .catch(e => {
                console.error(e.stack)
                res.send({ error: true, data: e.stack, message: 'authenticate' })
            })



    }
};
