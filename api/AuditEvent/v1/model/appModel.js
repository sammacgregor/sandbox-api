'user strict';
var sql = require('./db.js');

//Task object constructor
var AuditEvent = function(auditEvent){
    this.AuditEventID = auditEvent.auditEvent;
    this.CorrelationID = auditEvent.CorrelationID;
    this.InitiatingApplication = auditEvent.InitiatingApplication;
    this.RequestType = auditEvent.RequestType;
    this.Direction = auditEvent.Direction;        
    this.Success = auditEvent.Success;
    this.Data = auditEvent.Data;
    this.Message = auditEvent.Message;
    this.CreatedBy = auditEvent.CreatedBy;
    this.UpdatedBy = auditEvent.UpdatedBy;
};






AuditEvent.createAuditEvent = function (newAuditEvent, result) {    
        sql.query("INSERT INTO `AuditLog`.`tasks` set ?", newAuditEvent, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
AuditEvent.getAuditEventById = function (auditEventID, result) {
        sql.query("Select task from `AuditLog`.`Audit.APIEventLog` where APIEventLogID = ? ", auditEventID, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
AuditEvent.getAllAuditEvents = function (result) {
        sql.query("Select * from  `AuditLog`.`Audit.APIEventLog`", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('auditevent : ', res);  

                 result(null, res);
                }
            });   
};
// Task.updateById = function(id, task, result){
//   sql.query("UPDATE  `AuditLog`.`Audit.APIEventLog` SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
AuditEvent.remove = function(id, result){
     sql.query("DELETE FROM  `AuditLog`.`Audit.APIEventLog` WHERE APIEventLogID = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= AuditEvent;