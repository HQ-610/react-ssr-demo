import React from 'react'
import Header from '../../components/Header'

const Home = () => {
    return <div>
        <Header />
        Welcom,Home!
        <button onClick={() => {console.log('test')}}>test</button>
        </div>
}

export default Home
