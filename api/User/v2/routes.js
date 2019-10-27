'use strict';


var getUser = require('./getUser');
var getUsers = require('./getUsers');
var deleteUser = require('./deleteUser');
// var patchUser = require('./putUser');
var addUser = require('./addUser');


module.exports = function (app) {



  // User V2 Routes


  app.route('/v2/Users')
    .get(getUsers.getUsers)
    .post(addUser.addUser);



  app.route('/v2/Users/:UserID')
    .get(getUser.getUser)
    // .put(patchUser.patchUser)
    .delete(deleteUser.deleteUser);


};