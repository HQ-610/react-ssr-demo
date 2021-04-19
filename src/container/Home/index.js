import React from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header'

const Home = props => {
    return <div>
        <Header />
        Welcom, {props.name}, Home!
        <button onClick={() => {console.log('test')}}>test</button>
        </div>
}

const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps)(Home)
