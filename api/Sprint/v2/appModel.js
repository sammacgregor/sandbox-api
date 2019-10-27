'Sprint strict';


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

module.exports = Sprint;