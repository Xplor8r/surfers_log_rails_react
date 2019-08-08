import { endDataFetch } from './dataFetch'

export const fetchCountryData = () => {
    return dispatch => {
        fetch('/RailsApi/log_entries/countries', { method: 'GET' })
        .then(response => response.json())
        .then(countryData => {
            dispatch(getCountries(countryData))
            dispatch(endDataFetch())
        })
    }    
}

const getCountries = countryData => {
    return {
        type: 'GET_COUNTRIES',
        countryData
    };
}