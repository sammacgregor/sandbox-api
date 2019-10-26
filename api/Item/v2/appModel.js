'item strict';

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

module.exports = Item;