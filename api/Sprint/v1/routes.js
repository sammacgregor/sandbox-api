'use strict';
module.exports = function (app) {
  var sprint = require('./controller/appController');

  // sprint Routes
  app.route('/v1/sprints')
    .get(sprint.list_all_sprints)
    .post(sprint.create_a_sprint);

  app.route('/v1/sprints/:SprintID')
    .get(sprint.get_sprint)
    .put(sprint.update_a_sprint)
    .delete(sprint.delete_a_sprint);

    app.route('/v1/sprints/:SprintID/items/')
    .get(sprint.get_items_by_sprint)
};