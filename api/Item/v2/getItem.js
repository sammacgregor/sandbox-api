'use strict';
var sql = require('./db.js');

exports.getItem = function (req, res) {
    let itemID = req.params.ItemID;

    if (!itemID) {
        return res.status(400).send({ error: true, message: 'Please provide itemID' });
    }

    sql.query("Select * from `Backlog`.`Item.Item` WHERE ItemID = ?", itemID,
        function (error, results, fields) {
            if (error) {
                throw error;
            } else {
                console.log(res);
                return res.send({ error: false, data: results[0], message: 'getItem' })
            }
        });

};
