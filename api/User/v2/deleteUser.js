'use strict';
var sql = require('../../../config/db')
// var User = require('./appModel.js/index.js');


exports.deleteUser = function (req, res) {
  let UserID = req.params.UserID;

  if (!UserID) {
    return res.status(400).send({ error: true, message: 'Please provide UserID' });
}



sql
.query("DELETE FROM System.User WHERE User_ID = $1", [UserID])
.then(result => {
    return res.send({ error: false, data: result.rows, message: 'deleteUser' })

})
.catch(e => {
    console.error(e.stack)
    res.send({ error: true, data: e.stack, message: 'deleteUser' })
})


};