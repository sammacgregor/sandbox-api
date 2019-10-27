'use strict';

var User = require('./appModel.js');

var sql = require('../../db.js');


exports.addUser = function (req, res) {
  var newUser = new User(req.body);

  //handles null error 
  if (!newUser.Password || !newUser.GivenName || !newUser.Surname || !newUser.Email || !newUser.Mobile) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {




    sql
      .query("INSERT INTO System.User (Password, Given_Name, Surname, Email, Mobile, Created_Date, Created_By, Updated_Date, Updated_By) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING User_ID", [
        newUser.Password,
        newUser.GivenName,
        newUser.Surname,
        newUser.Email,
        newUser.Mobile,
        newUser.CreatedDate,
        newUser.CreatedBy,
        newUser.UpdatedDate,
        newUser.UpdatedBy
      ]).then(result => {
        newUser.UserID = JSON.stringify(result.rows[0].user_id);

        return res.send({ error: false, data: newUser, message: 'addUser' })

      })
      .catch(e => {
        console.error(e.stack)
        res.send({ error: true, data: e.stack, message: 'addUser' })
      })



  }
};
