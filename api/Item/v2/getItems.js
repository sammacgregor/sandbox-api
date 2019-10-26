'use strict';
var sql = require('./db.js');

exports.getItems = function (req, res) {

    var start = req.query.start;
    var limit = req.query.limit;

    if (start == null || limit == null) {
        var startNum = 0;
        var limitNum = 10;
    }

    else {
        //parse int Convert String to number 
        var startNum = parseInt(start);
        var limitNum = parseInt(limit);
    }



    sql.query("Select * from `Backlog`.`Item.Item` limit ? OFFSET ?", [limitNum, startNum], 
    function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            console.log(res);
            return res.send({ error: false, data: results, message: 'getItems' })
        }
    });

};



