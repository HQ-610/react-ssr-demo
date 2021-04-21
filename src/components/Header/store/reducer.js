import {login, logout} from './action'

const initialState = {
    login: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case login:
            return {
                ...state,
                login: true
            }
        case logout:
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}
