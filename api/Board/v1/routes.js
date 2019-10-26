'use strict';
module.exports = function (app) {
  var board = require('./controller/appController');

  // board Routes
  app.route('/v1/boards')
    .get(board.list_all_boards)
    .post(board.create_a_board);

  app.route('/v1/boards/:BoardID')
    .get(board.get_board)
    .put(board.update_a_board)
    .delete(board.delete_a_board);

    app.route('/v1/boards/:BoardID/sprints/')
    .get(board.get_sprints_by_board)
};