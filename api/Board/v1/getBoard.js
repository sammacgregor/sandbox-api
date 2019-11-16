'use strict';
var sql = require('../../../config/db')
var boardModel = require('../../../models/Board');

exports.getBoard = function (req, res) {
    let BoardID = req.params.BoardID;

    if (!BoardID) {
        return res.status(400).send({ error: true, message: 'Please provide BoardID' });
    }


    sql
        .query("Select * from Board.Board WHERE Board_ID = $1", [BoardID])
        .then(result => {

            var board = new boardModel(result.rows[0]);
            console.log(result.rows[0]);
            return res.send({ error: false, data: result.rows[0], message: 'getBoard' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'getBoard' })
        })
};
