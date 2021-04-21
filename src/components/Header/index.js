import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {onLogin, onLogout} from './store/action'

const Header = () => {
    const isLogin = useSelector(state => state.header.login)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li onClick={() => {
                    if(isLogin) {
                        dispatch(onLogout())
                    } else {
                        dispatch(onLogin())
                    }
                }}>
                {
                    isLogin ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
                }
                </li>
            </ul>
        </div>
    )
}

export default Header
