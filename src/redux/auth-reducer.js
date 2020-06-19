import {authAPI} from "../components/API/api";

const SET_AUTH_USER = 'SET_AUTH_USER';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUser = (id, email, login) => ({type: SET_AUTH_USER, data: {id, email, login}})

export const setAuthData = () => {
    return (dispatch) => {
        authAPI.getAuthData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUser(id, email, login))
                }
            });
    }
}


export default authReducer;


