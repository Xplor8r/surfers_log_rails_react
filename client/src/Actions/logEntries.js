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

export const clearLogEntryData = () => {
    return {
        type: 'CLEAR_LOG_ENTRY_DATA'
    };
}

export const fetchLogEntryDataByCountry = (id) => {
    return dispatch => {
        fetch('/RailsApi/log_entries/country/' + id, { method: 'GET' })
        .then(response => response.json())
        .then(logEntryData => {
            dispatch(getLogEntryData(logEntryData))
            dispatch(endDataFetch())
        })
    }    
}

export const fetchLogEntryDataBySurfSpot = (id) => {
    return dispatch => {
        fetch('/RailsApi/log_entries/surf_spot/' + id, { method: 'GET' })
        .then(response => response.json())
        .then(logEntryData => {
            dispatch(getLogEntryData(logEntryData))
            dispatch(endDataFetch())
        })
    }    
}

export const fetchLogEntryDataByUser = (id) => {
    return dispatch => {
        fetch('/RailsApi/users/' + id, { method: 'GET' })
        .then(response => response.json())
        .then(logEntryData => {
            dispatch(getLogEntryData(logEntryData))
            dispatch(endDataFetch())
        })
    }    
}