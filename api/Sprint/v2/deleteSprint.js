'use strict';
var sql = require('../../db.js');

// var Sprint = require('./appModel.js/index.js');


exports.deleteSprint = function (req, res) {
  let SprintID = req.params.SprintID;

  if (!SprintID) {
    return res.status(400).send({ error: true, message: 'Please provide SprintID' });
}



sql
.query("DELETE FROM Sprint.Sprint WHERE Sprint_ID = $1", [SprintID])
.then(result => {
    return res.send({ error: false, data: result.rows, message: 'deleteSprint' })

})
.catch(e => {
    console.error(e.stack)
    res.send({ error: true, data: e.stack, message: 'deleteSprint' })
})


};