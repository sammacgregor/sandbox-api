'use strict';
var sql = require('../../../config/db')
// var Item = require('./appModel.js/index.js');


exports.deleteItem = function (req, res) {
  let itemID = req.params.ItemID;

  if (!itemID) {
    return res.status(400).send({ error: true, message: 'Please provide itemID' });
}



sql
.query("DELETE FROM Item.Item WHERE Item_ID = $1", [itemID])
.then(result => {
    return res.send({ error: false, data: result.rows, message: 'deleteItem' })

})
.catch(e => {
    console.error(e.stack)
    res.send({ error: true, data: e.stack, message: 'deleteItem' })
})


};