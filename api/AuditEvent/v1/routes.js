'use strict';
module.exports = function(app) {
  var auditEvent = require('./controller/appController');

  // customerMemberTrimmed Routes
  app.route('/v1/AuditEvent')
    .get(auditEvent.list_all_AuditEvent)
    .post(auditEvent.create_a_AuditEvent);
   
   app.route('/v1/AuditEvent/:AuditEventID')
    .get(auditEvent.read_a_AuditEvent)
    .put(auditEvent.update_a_AuditEvent)
    .delete(auditEvent.delete_a_AuditEvent);
    };



