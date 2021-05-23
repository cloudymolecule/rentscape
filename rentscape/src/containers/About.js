import React, { Component } from 'react'
import Home from '../components/Home'

export default class About extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <Home />
                </div>
                <div className='notifications'>NOTIFICATIONS</div>
                <div className='display'>
                    <h1>About</h1>
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}