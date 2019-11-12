'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

var userModel = require('../../User/v2/appModel')
var Auth = require('./appModel.js');

var sql = require('../../db.js');


exports.authenticate = function (req, res) {
    var newAuth = new Auth(req.body);
    res.clearCookie('user_id')

    //handles null error 
    if (!newAuth.email || !newAuth.password) {
        console.log(JSON.stringify(req.body));
        console.log("req body: " + req.body)
        res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

    }
    else {

        sql
            .query("SELECT * FROM System.User WHERE Email = $1", [newAuth.email])
            .then(result => {



                if (!result.rows.length) {
                    return res.send({ error: true, message: 'No match was found' })

                } else if (result.rows.length > 1) {
                    return res.send({ error: true, message: 'More than one match was found' })

                }
                else {
                    var user = new userModel(result.rows[0]);

                    bcrypt.compare(newAuth.password, user.password)
                        .then(function (success) {

                            if (success) {
                                res.cookie(
                                    'user_id', user.user_id,
                                    {
                                        expires: new Date(Date.now() + 900000),
                                        httpOnly: true,
                                        secure: true
                                    })

                                return res.send({ error: false, data: { user_id: user.user_id }, message: 'succesfully authenticated' })
                            } else {
                                return res.send({ error: true, message: 'Not a valid password' })
                            }

                            // res == true
                        })
                        .catch(e => {
                            console.error(e.stack)
                            res.send({ error: true, data: e.stack, message: 'An error occured whilst trying to authenticate' })
                        })
                }



            })
            .catch(e => {
                console.error(e.stack)
                res.send({ error: true, data: e.stack, message: 'authenticate' })
            })



    }
};
