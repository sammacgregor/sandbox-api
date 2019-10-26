'use strict';
var sql = require('./db.js');

exports.getItemsBySprint = function (req, res) {

  let sprintID = req.params.SprintID;

  if (!sprintID) {
      return res.status(400).send({ error: true, message: 'Please provide sprintID' });
  }


  sql.query("Select SprintID, ItemID, Summary, ItemPriorityID, ItemStatusID, ItemTypeID, AssigneeID from `Backlog`.`Item.Item` WHERE SprintID = ?", sprintID, 
  function (error, results, fields) {
    if (error) {
        throw error;
    } else {
        console.log(res);
        return res.send({ error: false, data: results, message: 'getItemsBySprint' })
    }
});

};

