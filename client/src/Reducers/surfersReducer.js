export const surferData = (state = [], action) => {
    switch (action.type) {
        case 'GET_SURFERS':
            return action.surfers;
        default:
            return state
    }
}

export const newSurfer = (state = { surfers: []}, action) => {
    switch(action.type) {
        case 'ADD_SURFER':
            return {...state, surfers: [action.payload, ...state.surfers]}
        default:
            return state
    }
}
