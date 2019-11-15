'use strict';


var getBoard = require('./getBoard');

var getBoards = require('./getBoards');
var getSprintsByBoard = require('./getSprintsByBoard');
var deleteBoard = require('./deleteBoard');
// var patchBoard = require('./putBoard');
var addBoard = require('./addBoard');

const auth = require('../../../middleware/auth')

module.exports = function (app) {



  // Board V2 Routes


  app.route('/v2/boards')
    .get(auth,getBoards.getBoards)
    .post(auth,addBoard.addBoard);

  app.route('/v2/boards/:BoardID/sprints/')
    .get(auth,getSprintsByBoard.getSprintsByBoard);


  app.route('/v2/boards/:BoardID')
    .get(auth,getBoard.getBoard)
    // .put(patchBoard.patchBoard)
    .delete(auth,deleteBoard.deleteBoard);


};