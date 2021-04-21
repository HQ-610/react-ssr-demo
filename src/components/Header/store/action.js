export const login = 'header/login'
export const logout = 'header/logout'

export const onLogin = () => {
    return (dispatch) => {
        dispatch({
            type: login
        })
    }
}

export const onLogout = () => {
    return (dispatch) => {
        dispatch({
            type: logout
        })
    }
}
