'Board strict';
var sql = require('./db.js');

//Board object constructor
var Board = function (Board) {
    this.BoardID = Board.BoardID;
    this.BoardName = Board.BoardName;
    this.CreatedDate = Board.CreatedDate;
    this.CreatedBy = Board.CreatedBy;
    this.UpdatedDate = Board.UpdatedDate;
    this.UpdatedBy = Board.UpdatedBy;


};
Board.createBoard = function (newBoard, result) {
    sql.query("INSERT INTO `Sandbox`.`Board.Board` set ?", newBoard, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};

Board.getBoardById = function (BoardID, result) {
    sql.query("Select * from `Sandbox`.`Board.Board` where BoardID = ?", BoardID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(BoardID);
            result(null, res);

        }
    });
};


Board.getSprintsByBoardID = function (BoardID, result) {
    sql.query("Select * from `Sandbox`.`Sprint.Sprint` where BoardID = ?", BoardID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(BoardID);
            result(null, res);

        }
    });
};





Board.getAllBoard = function (result) {

    sql.query("Select * from `Sandbox`.`Board.Board`", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Boards : ', res);

            result(null, res);
        }
    });
};


Board.getBoardsByBoardID = function (result) {

    sql.query("Select * from `Sandbox`.`Board.Board` WHERE BoardID = ?", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Boards : ', res);

            result(null, res);
        }
    });
};

Board.updateById = function(id, Board, result){
  sql.query("UPDATE `Sandbox`.`Board.Board` SET Board = ? WHERE BoardID = ?", [Board.Board, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Board.remove = function (id, result) {
    sql.query("DELETE FROM `Sandbox`.`Board.Board` WHERE BoardID = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Board;