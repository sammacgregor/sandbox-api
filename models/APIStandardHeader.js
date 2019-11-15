class StandardHeader {
    constructor(
        CorrelationID,
        InitiatingApplication
    ) {
        this.CorrelationID = CorrelationID;
        this.InitiatingApplication = InitiatingApplication;

    }
}

module.exports = StandardHeader;