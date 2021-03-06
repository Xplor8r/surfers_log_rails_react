import { endDataFetch } from './dataFetch'

export const fetchSurfSpotData = () => {
    return dispatch => {
        fetch('/RailsApi/log_entries/surf_spots', { method: 'GET' })
        .then(response => response.json())
        .then(surfSpotData => {
            dispatch(getSurfSpots(surfSpotData));
            dispatch(endDataFetch());
        })
    }    
}

const getSurfSpots = surfSpotData => {
    return {
        type: 'GET_SURF_SPOT',
        surfSpotData
    };
}
