'use strict';

var Item = require('./appModel.js');

var sql = require('../../../config/db')

exports.addItem = function (req, res) {
  var newItem = new Item(req.body);

  //handles null error 
  if (!newItem.summary || !newItem.item_type_id || !newItem.item_status_id || !newItem.item_priority_id) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {




    sql
      .query("INSERT INTO Item.Item (Item_Type_ID, Item_Status_ID, Item_Priority_ID, Team_ID, Board_ID, Reporter_ID, Assignee_ID, Sprint_ID, Summary, Description, Created_Date, Created_By, Updated_Date, Updated_By) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING Item_ID", [
      newItem.item_type_id,
      newItem.item_status_id,
      newItem.item_priority_id,
      newItem.team_id,
      newItem.board_id,
      newItem.reporter_id,
      newItem.assignee_id,
      newItem.sprint_id,
      newItem.summary,
      newItem.description,
      newItem.created_date,
      newItem.created_by,
      newItem.updated_date,
      newItem.updated_by
      ]).then(result => {
        newItem.item_id = JSON.stringify(result.rows[0].item_id);

        return res.send({ error: false, data: newItem, message: 'addItem' })

      })
      .catch(e => {
        console.error(e.stack)
        res.send({ error: true, data: e.stack, message: 'addItem' })
      })



  }
};
