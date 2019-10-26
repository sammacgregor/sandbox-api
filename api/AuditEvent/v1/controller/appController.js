'use strict';

var AuditEvent = require('../model/appModel.js');

exports.list_all_AuditEvents = function(req, res) {
  AuditEvent.getAllAuditEvent(function(err, auditEvent) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', auditEvent);
    res.send(auditEvent);
  });
};



exports.create_a_auditEvent = function(req, res) {
  var new_auditEvent = new AuditEvent(req.body);

  //handles null error 
   if(!new_auditEvent.auditEvent || !new_auditEvent.status){

            res.status(400).send({ error:true, message: 'Please provide auditEvent/status' });

        }
else{
  
  AuditEvent.createAuditEvent(new_auditEvent, function(err, auditEvent) {
    
    if (err)
      res.send(err);
    res.json(auditEvent);
  });
}
};


exports.read_a_auditEvent = function(req, res) {
  AuditEvent.getAuditEventById(req.params.AuditEventId, function(err, auditEvent) {
    if (err)
      res.send(err);
    res.json(auditEvent);
  });
};


exports.update_a_auditEvent = function(req, res) {
  AuditEvent.updateById(req.params.AuditEventId, new AuditEvent(req.body), function(err, auditEvent) {
    if (err)
      res.send(err);
    res.json(auditEvent);
  });
};


exports.delete_a_auditEvent = function(req, res) {


  AuditEvent.remove( req.params.AuditEventId, function(err, auditEvent) {
    if (err)
      res.send(err);
    res.json({ message: 'AuditEvent successfully deleted' });
  });
};