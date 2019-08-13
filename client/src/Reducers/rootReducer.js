import { combineReducers } from 'redux'
import dataFetch from './dataFetchReducer'
import logEntryData from './logEntriesReducer'
import countryData from './countriesReducer'
import surfSpotData from './surfSpotsReducer'

const rootReducer = combineReducers({
    dataFetch,
    logEntryData,
    countryData,
    surfSpotData
})
  
export default rootReducer
