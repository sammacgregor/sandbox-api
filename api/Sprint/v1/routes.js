'use strict';


var getSprint = require('./getSprint');

var getSprints = require('./getSprints');
var getItemsBySprint = require('./getItemsBySprint');
var deleteSprint = require('./deleteSprint');
// var patchSprint = require('./putSprint');
var addSprint = require('./addSprint');

const auth = require('../../../middleware/auth')

module.exports = function (app) {



  // Sprint V2 Routes


  app.route('/v1/sprints')
    .get(auth,getSprints.getSprints)
    .post(auth,addSprint.addSprint);

    app.route('/v1/sprints/:SprintID/items')
    .get(auth,getItemsBySprint.getItemsBySprint);


  app.route('/v1/sprints/:SprintID')
    .get(auth,getSprint.getSprint)
    // .put(patchSprint.patchSprint)
    .delete(auth,deleteSprint.deleteSprint);


};