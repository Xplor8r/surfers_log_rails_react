import { combineReducers } from 'redux'
import dataFetch from './dataFetchReducer'
import logEntryData from './logEntriesReducer'
import countryData from './countriesReducer'
import surfSpotData from './surfSpotsReducer'
import newSurfer from './newSurferReducer'

const rootReducer = combineReducers({
    dataFetch,
    logEntryData,
    countryData,
    surfSpotData,
    newSurfer
})
  
export default rootReducer
