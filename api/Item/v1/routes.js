'use strict';


var getItem = require('./getItem');

var getItems = require('./getItems');
var getItemsBySprint = require('./getItemsBySprint');
var deleteItem = require('./deleteItem');
// var patchItem = require('./putItem');
var addItem = require('./addItem');

const auth = require('../../../middleware/auth')

module.exports = function (app) {



  // Item V2 Routes


  app.route('/v1/items')
    .get(auth,getItems.getItems)
    .post(auth,addItem.addItem);

  app.route('/v1/items/itembysprint/:SprintID')
    .get(auth,getItemsBySprint.getItemsBySprint);


  app.route('/v1/items/:ItemID')
    .get(auth,getItem.getItem)
    // .put(patchItem.patchItem)
    .delete(auth,deleteItem.deleteItem);


};