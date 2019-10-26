'use strict';

var Item = require('./appModel.js');

var sql = require('./db.js');



exports.addItem = function (req, res) {
  var newItem = new Item(req.body);

  //handles null error 
  if (!newItem.Summary || !newItem.ItemTypeID || !newItem.ItemStatusID || !newItem.ItemPriorityID) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {

    sql.query("INSERT INTO `Backlog`.`Item.Item` set ?", newItem,
      function (error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log(res);
          newItem.ItemID = JSON.stringify(results.insertId);
          return res.send({ error: false, data: newItem, message: 'addItem' })
        }
      });
  }
};
