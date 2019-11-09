'use strict';


var authenticate = require('./authenticate');
var addBoard = require('./addBoard');


module.exports = function (app) {

  app.route('/v2/boards')
    .post(authenticate.authenticate);

};