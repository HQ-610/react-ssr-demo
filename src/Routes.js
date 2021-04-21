import Home from './container/Home'
import Login from './container/Login'
import App from './App'

export default [{
    path: '/',
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login',
      }
    ]
  }]
