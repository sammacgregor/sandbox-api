'use strict';
var sql = require('../../../config/db')
exports.getItemsBySprint = function (req, res) {

  let sprintID = req.params.SprintID;

  if (!sprintID) {
      return res.status(400).send({ error: true, message: 'Please provide sprintID' });
  }


  sql
  .query("Select Sprint_ID, Item_ID, Summary, Item_Priority_ID, Item_Status_ID, Item_Type_ID, Assignee_ID from Item.Item WHERE Sprint_ID = $1", sprintID)
  .then(result => {
      return res.send({ error: false, data: result.rows, message: 'getItemsBySprint' })

  })
  .catch(e => {
      console.error(e.stack)
      res.send({ error: true, data: e.stack, message: 'getItemsBySprint' })
  })



};

