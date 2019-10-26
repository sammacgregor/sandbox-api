'use strict';


var getItem = require('./getItem');

var getItems = require('./getItems');
var getItemsBySprint = require('./getItemsBySprint');
var deleteItem = require('./deleteItem');
// var patchItem = require('./putItem');
var addItem = require('./addItem');


module.exports = function (app) {



  // Item V2 Routes


  app.route('/v2/items')
    .get(getItems.getItems)
    .post(addItem.addItem);

  app.route('/v2/items/itembysprint/:SprintID')
    .get(getItemsBySprint.getItemsBySprint);


  app.route('/v2/items/:ItemID')
    .get(getItem.getItem)
    // .put(patchItem.patchItem)
    .delete(deleteItem.deleteItem);


};