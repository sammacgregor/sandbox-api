'User strict';

//User object constructor
var User = function (user) {
    this.user_id = user.user_id;
    this.password = user.password;
    this.given_name = user.given_name;
    this.surname = user.surname;
    this.email = user.email;
    this.mobile = user.mobile;
    this.created_date = user.created_date;
    this.created_by = user.created_by;
    this.updated_date = user.updated_date;
    this.updated_by = user.updated_by;


};
module.exports = User;