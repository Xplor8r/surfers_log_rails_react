import { combineReducers } from 'redux'
import dataFetch from './dataFetchReducer'
import logEntryData from './logEntriesReducer'
import countryData from './countriesReducer'

const rootReducer = combineReducers({
    dataFetch,
    logEntryData,
    countryData
})
  
export default rootReducer
