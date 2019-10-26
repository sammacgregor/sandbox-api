'use strict';

var Item = require('../model/appModel.js');

exports.list_all_items = function(req, res) {
  Item.getAllItem(function(err, item) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', item);
    res.send(item);
  });
};



exports.create_a_item = function(req, res) {
  var new_item = new Item(req.body);

  //handles null error 
   if(!new_item.Summary || !new_item.ItemTypeID || !new_item.ItemStatusID || !new_item.ItemPriorityID){
            console.log(JSON.stringify(req.body));
            res.status(400).send({ error:true, message: 'Mandatory attributes have not been provided'});

        }
else{
  
  Item.createItem(new_item, function(err, item) {
    
    if (err)
      res.send(err);
    res.json(item);
  });
}
};


exports.get_item_summary = function(req, res) {
  Item.getItemById(req.params.ItemID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.get_items_by_sprint = function(req, res) {
  Item.getItemsBySprintID(req.params.SprintID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};



exports.update_a_item = function(req, res) {
  Item.updateById(req.params.ItemID, new Item(req.body), function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.delete_a_item = function(req, res) {


  Item.remove( req.params.ItemID, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};