'use strict';
var sql = require('./db.js');

// var Item = require('./appModel.js/index.js');


exports.deleteItem = function (req, res) {
  let itemID = req.params.ItemID;

  if (!itemID) {
    return res.status(400).send({ error: true, message: 'Please provide itemID' });
}


    sql.query("DELETE FROM `Backlog`.`Item.Item` WHERE ItemID = ?", [itemID], 
    function (error, results, fields) {
      if (error) {
          throw error;
      } else {
          console.log(res);
          return res.send({ error: false, data: results, message: 'deleteItem' })
      }
  });

};