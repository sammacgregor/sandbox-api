'use strict';


var authenticate = require('./authenticate');


module.exports = function (app) {

  app.route('/v1/auth')
    .post(authenticate.authenticate);

};