import { combineReducers } from 'redux'
import dataFetch from './dataFetchReducer'
import logEntryData from './logEntriesReducer'
import countryData from './countriesReducer'
import surfSpotData from './surfSpotsReducer'
import { newSurfer, surferData } from './surfersReducer'

const rootReducer = combineReducers({
    dataFetch,
    logEntryData,
    countryData,
    surfSpotData,
    newSurfer,
    surferData
})
  
export default rootReducer
