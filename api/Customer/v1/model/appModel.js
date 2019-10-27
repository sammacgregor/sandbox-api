'user strict';
var sql = require('./db.js');

//CustomerMemberTrimmed object constructor
var CustomerMemberTrimmed = function (customerMemberTrimmed) {
    this.RoleID = customerMemberTrimmed.RoleID;
    this.RoleTypeCode = customerMemberTrimmed.RoleTypeCode;
    this.GivenName = customerMemberTrimmed.GivenName;
    this.OtherGivenNames = customerMemberTrimmed.OtherGivenNames;
    this.Surname = customerMemberTrimmed.Surname;
    this.PreferredName = customerMemberTrimmed.PreferredName;
    this.BirthDate = customerMemberTrimmed.BirthDate;
    this.Gender = customerMemberTrimmed.Gender;
    this.Title = customerMemberTrimmed.Title;
    this.AddressLine1 = customerMemberTrimmed.AddressLine1;
    this.AddressLine2 = customerMemberTrimmed.AddressLine2;
    this.AddressLine3 = customerMemberTrimmed.AddressLine3;
    this.AddressLine4 = customerMemberTrimmed.AddressLine4;
    this.Suburb = customerMemberTrimmed.Suburb;
    this.Postcode = customerMemberTrimmed.Postcode;
    this.State = customerMemberTrimmed.State;
    this.Email = customerMemberTrimmed.Email;
    this.Mobile = customerMemberTrimmed.Mobile;
};


CustomerMemberTrimmed.createCustomerMemberTrimmed = function (newCustomerMemberTrimmed, result) {
    console.log(newCustomerMemberTrimmed);
    sql.query("CALL `Sandbox`.`Role.sp_CreateCustomer`(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            newCustomerMemberTrimmed.RoleTypeCode,
            newCustomerMemberTrimmed.GivenName,
            newCustomerMemberTrimmed.OtherGivenNames,
            newCustomerMemberTrimmed.Surname,
            newCustomerMemberTrimmed.PreferredName,
            newCustomerMemberTrimmed.BirthDate,
            newCustomerMemberTrimmed.Gender,
            newCustomerMemberTrimmed.Title,
            newCustomerMemberTrimmed.AddressLine1,
            newCustomerMemberTrimmed.AddressLine2,
            newCustomerMemberTrimmed.AddressLine3,
            newCustomerMemberTrimmed.AddressLine4,
            newCustomerMemberTrimmed.Suburb,
            newCustomerMemberTrimmed.Postcode,
            newCustomerMemberTrimmed.State,
            newCustomerMemberTrimmed.Email,
            newCustomerMemberTrimmed.Mobile
        ], function (err, res) {

            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
};
CustomerMemberTrimmed.getCustomerMemberTrimmedById = function (RoleID, result) {
    sql.query("Select * from `Sandbox`.`Role.vw_CustomerMemberTrimmed` where RoleID = ? ", RoleID, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
CustomerMemberTrimmed.getAllCustomerMemberTrimmed = function (start, limit, result) {

    var query = "Select count (*) as TotalCount FROM `Sandbox`.`Role.vw_CustomerMemberTrimmed`";

    sql.query(query, function (err, rows) {
        if (err) {
            return err;
        } else {
            //store Total count in variable
            let totalCount = rows[0].TotalCount

            var startNum = null;
            var limitNum = null;

            if (start == null || limit == null) {
                startNum = 0;
                limitNum = 10;
            }

            else {
                //parse int Convert String to number 
                startNum = parseInt(start);
                limitNum = parseInt(limit);
            }

                sql.query("Select * from `Sandbox`.`Role.vw_CustomerMemberTrimmed` limit ? OFFSET ?", [limitNum, startNum], function (err, res) {

                    if (err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                    else {
                        console.log('CustomerMemberTrimmeds : ', res);
                
                        result(null, {"totalCount": totalCount, "data": res});
                    }
                });


            }
             
    })



};
// CustomerMemberTrimmed.updateById = function(id, CustomerMemberTrimmed, result){
//   sql.query("UPDATE `Sandbox`.`CustomerMemberTrimmeds` SET CustomerMemberTrimmed = ? WHERE id = ?", [CustomerMemberTrimmed.CustomerMemberTrimmed, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
// CustomerMemberTrimmed.remove = function(id, result){
//      sql.query("DELETE FROM `Sandbox`.`Role.vw_CustomerMemberTrimmed` WHERE RoleID = ?", [id], function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{

//                  result(null, res);
//                 }
//             }); 
// };

module.exports = CustomerMemberTrimmed;