class APIResponse {
    constructor(
        Success,
        Data,
        Message
        ) {
        this.Success = Success;
        this.Data = Data;
        this.Message = Message;
    }
}

module.exports = APIResponse;