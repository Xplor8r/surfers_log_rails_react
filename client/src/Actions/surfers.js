import { endDataFetch } from './dataFetch'

export const fetchSurferData = () => {
    return dispatch => {
        fetch('/RailsApi/users', { method: 'GET' })
        .then(response => response.json())
        .then(surfers => {
            dispatch(getSurfers(surfers));
            dispatch(endDataFetch());
        })
    }    
}

const getSurfers = surfers => {
    return {
        type: 'GET_SURFERS',
        surfers
    };
}

export const createSurfer = (input) => {
    return dispatch => {
        const surfer = {
            user: {
                name: input.userName,
                email: input.email,
                password: input.password,
                admin: false
            }
        }

        fetch('RailsApi/users',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(surfer)
            }
        )
        .then(response => response.json())
        .then(newSurfer =>{ 
            dispatch(addSurfer(newSurfer))
        })
    }  
}

const addSurfer = newSurfer => {
    return {
        type: 'ADD_SURFER',
        payload: [newSurfer]
    };
}