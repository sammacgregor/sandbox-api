'use strict';
var sql = require('../../db.js');

exports.getItemsBySprint = function (req, res) {

  let sprintID = req.params.SprintID;

  if (!sprintID) {
      return res.status(400).send({ error: true, message: 'Please provide sprintID' });
  }


  sql
  .query("Select * from Item.Item WHERE sprint_ID = $1", [sprintID])
  .then(result => {
      return res.send({ error: false, data: result.rows, message: 'getItemsBySprint' })

  })
  .catch(e => {
      console.error(e.stack)
      res.send({ error: true, data: e.stack, message: 'getItemsBySprint' })
  })



};

