'use strict';
var sql = require('../../db.js');

// var Board = require('./appModel.js/index.js');


exports.deleteBoard = function (req, res) {
  let BoardID = req.params.BoardID;

  if (!BoardID) {
    return res.status(400).send({ error: true, message: 'Please provide BoardID' });
}



sql
.query("DELETE FROM Board.Board WHERE Board_ID = $1", [BoardID])
.then(result => {
    return res.send({ error: false, data: result.rows, message: 'deleteBoard' })

})
.catch(e => {
    console.error(e.stack)
    res.send({ error: true, data: e.stack, message: 'deleteBoard' })
})


};