'Sprint strict';
var sql = require('./db.js');

//Sprint object constructor
var Sprint = function (Sprint) {
    this.SprintID = Sprint.SprintID;
    this.BoardID = Sprint.BoardID;
    this.SprintStartDate = Sprint.SprintStartDate;
    this.SprintEndDate = Sprint.SprintEndDate;
    this.SprintActive = Sprint.SprintActive;
    this.SprintStoryPoints = Sprint.SprintStoryPoints;
    this.SprintTargetPoints = Sprint.SprintTargetPoints;
    this.CreatedBy = Sprint.CreatedBy;
    this.UpdatedDate = Sprint.UpdatedDate;
    this.UpdatedBy = Sprint.UpdatedBy;
};
Sprint.createSprint = function (newSprint, result) {
    sql.query("INSERT INTO `Backlog`.`Sprint.Sprint` set ?", newSprint, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Sprint.getSprintBySprintID = function (SprintID, result) {
    sql.query("Select * from `Backlog`.`Sprint.Sprint` where SprintID = ?", SprintID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(SprintID);
            result(null, res);

        }
    });
};



Sprint.getItemsBySprintID = function (SprintID, result) {
    sql.query("Select * from `Backlog`.`Item.Item` where SprintID = ?", SprintID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(SprintID);
            result(null, res);

        }
    });
};


Sprint.getAllSprint = function (result) {

    sql.query("Select * from `Backlog`.`Sprint.Sprint`", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Sprints : ', res);

            result(null, res);
        }
    });
};


Sprint.getSprintsByBoardID = function (result) {

    sql.query("Select * from `Backlog`.`Sprint.Sprint` WHERE BoardID = ?", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Sprints : ', res);

            result(null, res);
        }
    });
};

// Sprint.updateById = function(id, Sprint, result){
//   sql.query("UPDATE `Backlog`.`Sprint.Sprint` SET Sprint = ? WHERE SprintID = ?", [Sprint.Sprint, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
Sprint.remove = function (id, result) {
    sql.query("DELETE FROM `Backlog`.`Sprint.Sprint` WHERE SprintID = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Sprint;