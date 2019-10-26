class CustomerMemberTrimmed {
    constructor(
        RoleTypeCode,
        GivenName,
        OtherGivenNames,
        Surname,
        PreferredName,
        BirthDate,
        Gender,
        Title,
        AddressLine1,
        AddressLine2,
        AddressLine3,
        AddressLine4,
        Suburb,
        Postcode,
        State,
        Email,
        Mobile
    ) {
        this.RoleTypeCode = RoleTypeCode;
        this.GivenName = GivenName;
        this.OtherGivenNames = OtherGivenNames;
        this.Surname = Surname;
        this.PreferredName = PreferredName;
        this.BirthDate = BirthDate;
        this.Gender = Gender;
        this.Title = Title;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.AddressLine3 = AddressLine3;
        this.AddressLine4 = AddressLine4;
        this.Suburb = Suburb;
        this.Postcode = Postcode;
        this.State = State;
        this.Email = Email;
        this.Mobile = Mobile;
    }
}

module.exports = CustomerMemberTrimmed;

// const prospectMember = {
//     RoleTypeCode: "MBP",
//     GivenName: "John",
//     OtherGivenNames: "Henry",
//     Surname: "Baller",
//     PreferredName: "Hustler",
//     BirthDate: "2019-10-30",
//     Gender: "M",
//     Title: "Captain",
//     AddressLine1: "111 Eagle Street",
//     AddressLine2: "",
//     AddressLine3: "",
//     AddressLine4: "",
//     Suburb: "Brisbane",
//     Postcode: "4000",
//     State: "QLD",
//     Email: "yoyo@gogo.com",
//     Mobile: "0411222333"
// };