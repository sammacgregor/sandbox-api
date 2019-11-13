'use strict';

var getAuth = require('./getAuth');
var authenticate = require('./authenticate');
var destroy = require('./destroy');


module.exports = function (app) {


  app.route('/v1/auth/check')
  .post(getAuth.getAuth)


  app.route('/v1/auth')
  .post(authenticate.authenticate);

  app.route('/v1/auth/destroy')
    .post(destroy.destroy);


};