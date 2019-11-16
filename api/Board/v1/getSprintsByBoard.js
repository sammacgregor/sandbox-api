'use strict';
var sql = require('../../../config/db')
exports.getSprintsByBoard = function (req, res) {

  let boardID = req.params.BoardID;

  if (!boardID) {
      return res.status(400).send({ error: true, message: 'Please provide BoardID' });
  }


  sql
  .query("Select * from Sprint.Sprint WHERE Board_ID = $1", [boardID])
  .then(result => {
      return res.send({ error: false, data: result.rows, message: 'getSprintsByBoard' })

  })
  .catch(e => {
      console.error(e.stack)
      res.send({ error: true, data: e.stack, message: 'getSprintsByBoard' })
  })



};

