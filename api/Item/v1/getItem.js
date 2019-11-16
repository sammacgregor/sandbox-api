'use strict';
var sql = require('../../../config/db')
exports.getItem = function (req, res) {
    let itemID = req.params.ItemID;

    if (!itemID) {
        return res.status(400).send({ error: true, message: 'Please provide itemID' });
    }


    sql
        .query("Select * from Item.Item WHERE Item_ID = $1", [itemID])
        .then(result => {
            return res.send({ error: false, data: result.rows, message: 'getItem' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'getItem' })
        })
};
