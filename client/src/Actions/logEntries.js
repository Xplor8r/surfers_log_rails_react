import { endDataFetch } from './dataFetch'

export const fetchLogEntryData = () => {
    return dispatch => {
        fetch('/RailsApi/log_entries', { method: 'GET' })
        .then(response => response.json())
        .then(logEntryData => {
            dispatch(getLogEntryData(logEntryData))
            dispatch(endDataFetch())
        })
    }    
}

const getLogEntryData = logEntryData => {
    return {
        type: 'GET_LOG_ENTRY_DATA',
        logEntryData
    };
}