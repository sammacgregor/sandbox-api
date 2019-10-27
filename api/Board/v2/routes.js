'use strict';


var getBoard = require('./getBoard');

var getBoards = require('./getBoards');
var getSprintsByBoard = require('./getSprintsByBoard');
var deleteBoard = require('./deleteBoard');
// var patchBoard = require('./putBoard');
var addBoard = require('./addBoard');


module.exports = function (app) {



  // Board V2 Routes


  app.route('/v2/boards')
    .get(getBoards.getBoards)
    .post(addBoard.addBoard);

    app.route('/v2/boards/:BoardID/sprints/')
    .get(getSprintsByBoard.getSprintsByBoard);


  app.route('/v2/boards/:BoardID')
    .get(getBoard.getBoard)
    // .put(patchBoard.patchBoard)
    .delete(deleteBoard.deleteBoard);


};