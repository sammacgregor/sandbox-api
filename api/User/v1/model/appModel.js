'user strict';
var sql = require('./db.js');

//User object constructor
var User = function (user) {
    this.UserID = user.UserID;
    this.Password = user.Password;
    this.GivenName = user.GivenName;
    this.Surname = user.Surname;
    this.Email = user.Email;
    this.Mobile = user.Mobile;
    this.CreatedDate = user.CreatedDate;
    this.CreatedBy = user.CreatedBy;
    this.UpdatedDate = user.UpdatedDate;
    this.UpdatedBy = user.UpdatedBy;


};
User.createUser = function (newUser, result) {
    sql.query("INSERT INTO `Sandbox`.`User.User` set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
User.getUserById = function (UserID, result) {
    sql.query("Select * from `Sandbox`.`User.User` where UserID = ?", UserID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(UserID);
            result(null, res);

        }
    });
};
User.getAllUser = function (result) {

    sql.query("Select * from `Sandbox`.`User.User`", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);

            result(null, res);
        }
    });
};
// User.updateById = function(id, user, result){
//   sql.query("UPDATE `Sandbox`.`User.User` SET user = ? WHERE UserID = ?", [user.user, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
User.remove = function (id, result) {
    sql.query("DELETE FROM `Sandbox`.`User.User` WHERE UserID = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = User;