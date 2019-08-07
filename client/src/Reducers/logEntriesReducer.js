const logEntryData = (state = [], action) => {
    switch (action.type) {
        case "GET_LOG_ENTRY_DATA":
            return action.logEntryData;
        default:
            return state
    }
}
export default logEntryData