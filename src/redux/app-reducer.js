import {getAuthData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthData())
        Promise.all([promise])
            .then(dispatch(initializedSuccess()))
    }
}


export default appReducer;

