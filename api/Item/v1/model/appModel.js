'item strict';
var sql = require('./db.js');

//Item object constructor
var Item = function (item) {
    this.ItemID = item.ItemID;
    this.ItemTypeID = item.ItemTypeID;
    this.ItemStatusID = item.ItemStatusID;
    this.ItemPriorityID = item.ItemPriorityID;
    this.TeamID = item.TeamID;
    this.BoardID = item.BoardID;
    this.ReporterID = item.ReporterID;
    this.AssigneeID = item.AssigneeID;
    this.SprintID = item.SprintID;
    this.Summary = item.Summary;
    this.Description = item.Description;
    this.CreatedDate = item.CreatedDate;
    this.CreatedBy = item.CreatedBy;
    this.UpdatedDate = item.UpdatedDate;
    this.UpdatedBy = item.UpdatedBy;


};
Item.createItem = function (newItem, result) {
    sql.query("INSERT INTO `Sandbox`.`Item.Item` set ?", newItem, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Item.getItemById = function (ItemID, result) {
    sql.query("Select * from `Sandbox`.`Item.Item` where ItemID = ?", ItemID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(ItemID);
            result(null, res);

        }
    });
};


Item.getAllItem = function (result) {

    sql.query("Select * from `Sandbox`.`Item.Item`", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('items : ', res);

            result(null, res);
        }
    });
};



Item.getItemsBySprintID = function (SprintID, result) {

    sql.query("Select SprintID, ItemID, Summary, ItemPriorityID, ItemStatusID, ItemTypeID, AssigneeID from `Sandbox`.`Item.Item` WHERE SprintID = ?", SprintID, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('items : ', res);

            result(null, res);
        }
    });
};



Item.getItemsByBoardID = function (result) {

    sql.query("Select * from `Sandbox`.`Item.Item` WHERE BoardID = ?", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('items : ', res);

            result(null, res);
        }
    });
};

// Item.updateById = function(id, item, result){
//   sql.query(
//       "UPDATE `Sandbox`.`Item.Item` SET
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
Item.remove = function (id, result) {
    sql.query("DELETE FROM `Sandbox`.`Item.Item` WHERE ItemID = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Item;