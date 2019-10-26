'use strict';
module.exports = function(app) {
  var item = require('./controller/appController');

  // Item Routes
  app.route('/v1/items')
    .get(item.list_all_items)
    .post(item.create_a_item);

    
    app.route('/v1/items/itembysprint/:SprintID')
    .get(item.get_items_by_sprint);


   app.route('/v1/items/:ItemID')
    .get(item.get_item_summary)
    .put(item.update_a_item)
    .delete(item.delete_a_item);
    };