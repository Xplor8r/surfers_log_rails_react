const logEntryData = (state = [], action) => {
    switch (action.type) {
        case "GET_LOG_ENTRY_DATA":
            return action.logEntryData;
        case "CLEAR_LOG_ENTRY_DATA":
            return [];
        default:
            return state
    }
}
export default logEntryData