'User strict';

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
module.exports = User;