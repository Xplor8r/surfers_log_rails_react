const newSurfer = (state = { surfers: []}, action) => {
    switch(action.type) {
        case 'ADD_SURFER':
            return {...state, surfers: [action.payload, ...state.surfers]}
        default:
            return state
    }
}

export default newSurfer