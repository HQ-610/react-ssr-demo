import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getList} from './store/action'

const Home = props => {
    const name = useSelector(state => state.home.name)
    const list = useSelector(state => state.home.list)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!list?.length) {
            dispatch(getList())
        }
    }, [])
    return (
        <div>
            Welcom, {name}, Home!
            <button onClick={() => {console.log('test')}}>test</button>
            <ul>
                {list?.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title}
                        </li>
                )})}
            </ul>
        </div>)
}

Home.loadData = (store) => {
    console.log('ssr loadData')
    return store.dispatch(getList())
}
export default Home
