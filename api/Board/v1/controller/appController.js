'use strict';

var board = require('../model/appModel.js');

exports.list_all_boards = function(req, res) {
  board.getAllboard(function(err, board) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', board);
    res.send(board);
  });
};


exports.get_sprints_by_board = function(req, res) {
  board.getSprintsByBoardID(req.params.BoardID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_board = function(req, res) {
  board.getBoardById(req.params.BoardID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.create_a_board = function(req, res) {
  var new_board = new board(req.body);

  //handles null error 
   if(!new_board.Summary || !new_board.boardTypeID || !new_board.boardStatusID || !new_board.boardPriorityID){
            console.log(JSON.stringify(req.body));
            res.status(400).send({ error:true, message: 'Mandatory attributes have not been provided'});

        }
else{
  
  board.createboard(new_board, function(err, board) {
    
    if (err)
      res.send(err);
    res.json(board);
  });
}
};





exports.update_a_board = function(req, res) {
  board.updateById(req.params.boardID, new board(req.body), function(err, board) {
    if (err)
      res.send(err);
    res.json(board);
  });
};


exports.delete_a_board = function(req, res) {


  board.remove( req.params.boardID, function(err, board) {
    if (err)
      res.send(err);
    res.json({ message: 'board successfully deleted' });
  });
};