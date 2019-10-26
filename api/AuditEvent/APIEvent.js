class APIEventLog {
    constructor(
        CorrelationID,
        InitiatingApplication,
        RequestType,
        Direction,
        Success,
        Data,
        Message,
        CreatedBy,
        UpdatedBy
    ) {
        this.CorrelationID = CorrelationID;
        this.InitiatingApplication = InitiatingApplication;
        this.RequestType = RequestType;
        this.Direction = Direction;        
        this.Success = Success;
        this.Data = Data;
        this.Message = Message;
        this.CreatedBy = CreatedBy;
        this.UpdatedBy = UpdatedBy;


    }
}

module.exports = APIEventLog;