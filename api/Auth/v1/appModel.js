'Auth strict';

//Board object constructor
var Auth = function (auth) {
    this.email = auth.email;
    this.password = auth.password;
    this.user_id = auth.user_id;

};


module.exports = Auth;