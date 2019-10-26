'use strict';

var sql = require('./db.js');

exports.update_a_item = function(req, res) {

var item  = req.params.ItemID;

// Item.updateById = function(id, item, result){
//   sql.query(
//       "UPDATE `Backlog`.`Item.Item` SET
//       ItemTypeID = COALESCE(?,ItemTypeID),
//       ItemStatusID = COALESCE(?,ItemTypeID),
//       ItemPriorityID = COALESCE(?,ItemTypeID),
//       TeamID = COALESCE(?,ItemTypeID),
//       BoardID = COALESCE(?,ItemTypeID),
//       ReporterID = COALESCE(?,ItemTypeID),
//       AssigneeID = COALESCE(?,ItemTypeID),
//       SprintID = COALESCE(?,ItemTypeID),
//       Summary = COALESCE(?,ItemTypeID),
//       Description = COALESCE(?,ItemTypeID),
//       CreatedDate = COALESCE(?,ItemTypeID),
//       CreatedBy = COALESCE(?,ItemTypeID),
//       UpdatedDate = COALESCE(?,ItemTypeID),
//       UpdatedBy = COALESCE(?,ItemTypeID)
//       WHERE ItemID = ?"
      
//       [item.ItemTypeID,
//       item.ItemStatusID,
//       item.ItemPriorityID,
//       item.TeamID,
//       item.BoardID,
//       item.ReporterID,
//       item.AssigneeID,
//       item.SprintID,
//       item.Summary,
//       item.Description,
//       item.CreatedDate,
//       item.CreatedBy,
//       item.UpdatedDate,
//       item.UpdatedBy,
//       id], 
//     function (err, res) {
//         if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };


  };
  