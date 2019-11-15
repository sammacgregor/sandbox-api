'use strict';
var sql = require('../../../config/db')
exports.getUsers = function (req, res) {

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



    sql
        .query("Select * from System.User limit $1 offset $2", [limitNum, startNum])
        .then(result => {
            return res.send({ error: false, data: result.rows, message: 'getUsers' })

        })
        .catch(e => {
            console.error(e.stack)
            res.send({ error: true, data: e.stack, message: 'getUsers' })
        })

 

};



