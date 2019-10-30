'use strict';

var Board = require('./appModel.js');

var sql = require('../../db.js');


exports.addBoard = function (req, res) {
  var newBoard = new Board(req.body);

  //handles null error 
  if (!newBoard.board_name) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {




    sql
      .query("INSERT INTO Board.Board (board_name, created_date, created_by, updated_date, updated_by) VALUES ($1, $2, $3, $4, $5) RETURNING Board_ID", [
      newBoard.board_name,
      newBoard.created_date,
      newBoard.created_by,
      newBoard.updated_date,
      newBoard.updated_by
      ]).then(result => {
        newBoard.board_id = result.rows[0].board_id;

        return res.send({ error: false, data: newBoard, message: 'addBoard' })

      })
      .catch(e => {
        console.error(e.stack)
        res.send({ error: true, data: e.stack, message: 'addBoard' })
      })



  }
};
