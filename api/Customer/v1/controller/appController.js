'use strict';

var CustomerMemberTrimmed = require('../model/appModel.js');

exports.list_all_CustomerMemberTrimmed = function(req, res) {

var start = req.query.start;
var limit = req.query.limit;

  CustomerMemberTrimmed.getAllCustomerMemberTrimmed(start, limit, function(err, CustomerMemberTrimmed) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log(start);
      // console.log('res', CustomerMemberTrimmed);
    res.send(CustomerMemberTrimmed);
  });
};



exports.create_a_CustomerMemberTrimmed = function(req, res) {
  var new_CustomerMemberTrimmed = new CustomerMemberTrimmed(req.body);

  //handles null error 
   if(!new_CustomerMemberTrimmed.GivenName || !new_CustomerMemberTrimmed.RoleTypeCode){

            res.status(400).send({ error:true, message: 'Please provide CustomerMemberTrimmed/status' });

        }
else{
  
  CustomerMemberTrimmed.createCustomerMemberTrimmed(new_CustomerMemberTrimmed, function(err, CustomerMemberTrimmed) {
    
    if (err)
      res.send(err);
    res.json(CustomerMemberTrimmed);
  });
}
};


exports.read_a_CustomerMemberTrimmed = function(req, res) {
  CustomerMemberTrimmed.getCustomerMemberTrimmedById(req.params.RoleID, function(err, CustomerMemberTrimmed) {
    if (err)
      res.send(err);
    res.json(CustomerMemberTrimmed);
  });
};


exports.update_a_CustomerMemberTrimmed = function(req, res) {
  CustomerMemberTrimmed.updateById(req.params.RoleID, new CustomerMemberTrimmed(req.body), function(err, CustomerMemberTrimmed) {
    if (err)
      res.send(err);
    res.json(CustomerMemberTrimmed);
  });
};


exports.delete_a_CustomerMemberTrimmed = function(req, res) {


  CustomerMemberTrimmed.remove( req.params.RoleID, function(err, CustomerMemberTrimmed) {
    if (err)
      res.send(err);
    res.json({ message: 'CustomerMemberTrimmed successfully deleted' });
  });
};