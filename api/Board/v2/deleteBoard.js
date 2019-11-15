'use strict';
var sql = require('../../../config/db')
// var Board = require('./appModel.js/index.js');


exports.deleteBoard = function (req, res) {
    let BoardID = req.params.BoardID;

    if (!BoardID) {
        return res.status(400).send({ error: true, message: 'Please provide BoardID' });
    }


    var unassociateItemsresult = sql
        .query("UPDATE Item.Item SET board_id = null, sprint_id = null WHERE board_id = $1", [BoardID])
        .then(result => {
            var outcome = { error: false, message: "unassociateItemsToBoard" }
            return outcome;

        })
        .catch(e => {
            console.error(e.stack)
            var outcome = { error: true, message: "unassociateItemsToBoard" }
            return outcome;
        })


        

    sql
        .query("DELETE FROM Board.Board WHERE Board_ID = $1", [BoardID])
        .then(result => {

            if (unassociateItemsresult.error) {
                return res.send({ error: true, data: result.rows, message: 'board deleted but items could not be unassociated' })

            }
            return res.send({ error: false, data: result.rows, message: 'deleteBoard' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'deleteBoard' })
        })


};