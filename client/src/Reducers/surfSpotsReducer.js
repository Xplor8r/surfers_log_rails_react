const surfSpotData = (state = [], action) => {
    switch (action.type) {
        case 'GET_SURF_SPOT':
            return action.surfSpotData;
        default:
            return state
    }
}
export default surfSpotData