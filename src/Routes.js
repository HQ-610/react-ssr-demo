import Home from './container/Home'
import Login from './container/Login'
import App from './App'
import NotFound from './container/NotFound'
import TestRedirect from './container/TestRedirect'

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
      },
      {
        path: '/301',
        component: TestRedirect,
        key: '301',
      },
      {
        component: NotFound
      }
    ]
  }]
