'use strict';


var getSprint = require('./getSprint');

var getSprints = require('./getSprints');
var getItemsBySprint = require('./getItemsBySprint');
var deleteSprint = require('./deleteSprint');
// var patchSprint = require('./putSprint');
var addSprint = require('./addSprint');


module.exports = function (app) {



  // Sprint V2 Routes


  app.route('/v2/sprints')
    .get(getSprints.getSprints)
    .post(addSprint.addSprint);

    app.route('/v2/sprints/:SprintID/items')
    .get(getItemsBySprint.getItemsBySprint);


  app.route('/v2/sprints/:SprintID')
    .get(getSprint.getSprint)
    // .put(patchSprint.patchSprint)
    .delete(deleteSprint.deleteSprint);


};