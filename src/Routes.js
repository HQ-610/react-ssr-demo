import React from 'react'
import Home from './container/Home'
import Login from './container/Login'

export default [{
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home'
}, {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
    // loadData: Login.loadData
}]
