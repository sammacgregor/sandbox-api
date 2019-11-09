'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

var User = require('./appModel.js');

var sql = require('../../db.js');


exports.addUser = function (req, res) {
  var newUser = new User(req.body);

  //handles null error 
  if (!newUser.password || !newUser.given_name || !newUser.surname || !newUser.email || !newUser.mobile) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {


    bcrypt.hash(newUser.password, saltRounds, function (err, hash) {

      

      sql
        .query("INSERT INTO System.User (Password, Given_Name, Surname, Email, Mobile, Created_Date, Created_By, Updated_Date, Updated_By) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING user_id", [
          hash,
          newUser.given_name,
          newUser.surname,
          newUser.email,
          newUser.mobile,
          newUser.created_date,
          newUser.created_by,
          newUser.updated_date,
          newUser.updated_by
        ]).then(result => {
          newUser.user_id = JSON.stringify(result.rows[0].user_id);

          return res.send({ error: false, data: newUser, message: 'addUser' })

        })
        .catch(e => {
          console.error(e.stack)
          res.send({ error: true, data: e.stack, message: 'addUser' })
        })

    });





  }
};
