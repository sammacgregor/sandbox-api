'use strict';
module.exports = function(app) {
  var customerMemberTrimmed = require('./controller/appController');

  // customerMemberTrimmed Routes
  app.route('/v1/customer')
    .get(customerMemberTrimmed.list_all_CustomerMemberTrimmed)
    .post(customerMemberTrimmed.create_a_CustomerMemberTrimmed);
   
   app.route('/v1/customer/:RoleID')
    .get(customerMemberTrimmed.read_a_CustomerMemberTrimmed)
    .put(customerMemberTrimmed.update_a_CustomerMemberTrimmed)
    .delete(customerMemberTrimmed.delete_a_CustomerMemberTrimmed);
    };



