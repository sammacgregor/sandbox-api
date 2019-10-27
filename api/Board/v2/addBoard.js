'use strict';

var Board = require('./appModel.js');

var sql = require('../../db.js');


exports.addBoard = function (req, res) {
  var newBoard = new Board(req.body);

  //handles null error 
  if (!newBoard.BoardName) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {




    sql
      .query("INSERT INTO Board.Board (Board_Name, Created_Date, Created_By, Updated_Date, Updated_By) VALUES ($1, $2, $3, $4) RETURNING Board_ID", [
      newBoard.BoardName,
      newBoard.CreatedDate,
      newBoard.CreatedBy,
      newBoard.UpdatedDate,
      newBoard.UpdatedBy
      ]).then(result => {
        newBoard.BoardID = JSON.stringify(result.rows[0].board_id);

        return res.send({ error: false, data: newBoard, message: 'addBoard' })

      })
      .catch(e => {
        console.error(e.stack)
        res.send({ error: true, data: e.stack, message: 'addBoard' })
      })



  }
};
