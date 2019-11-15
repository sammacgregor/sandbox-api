'use strict';


var getUser = require('./getUser');
var getUsers = require('./getUsers');
var deleteUser = require('./deleteUser');
// var patchUser = require('./putUser');
var addUser = require('./addUser');
const auth = require('../../../middleware/auth')


module.exports = function (app) {



  // User V2 Routes


  app.route('/v2/Users')
    .get(auth,getUsers.getUsers)
    .post(auth,addUser.addUser);



  app.route('/v2/Users/:UserID')
    .get(auth,getUser.getUser)
    // .put(patchUser.patchUser)
    .delete(auth,deleteUser.deleteUser);


};