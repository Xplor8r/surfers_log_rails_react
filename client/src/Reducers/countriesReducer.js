const countryData = (state = [], action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return action.countryData;
        default:
            return state
    }
}
export default countryData