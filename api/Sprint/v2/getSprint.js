'use strict';
var sql = require('../../db.js');

exports.getSprint = function (req, res) {
    let SprintID = req.params.SprintID;

    if (!SprintID) {
        return res.status(400).send({ error: true, message: 'Please provide SprintID' });
    }


    sql
        .query("Select * from Sprint.Sprint WHERE Sprint_ID = $1", [SprintID])
        .then(result => {
            return res.send({ error: false, data: result.rows, message: 'getSprint' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'getSprint' })
        })
};
