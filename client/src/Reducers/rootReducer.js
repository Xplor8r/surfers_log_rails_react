import { combineReducers } from 'redux'
import dataFetch from './dataFetchReducer'
import logEntryData from './logEntriesReducer'

const rootReducer = combineReducers({
    dataFetch,
    logEntryData,

})
  
export default rootReducer
