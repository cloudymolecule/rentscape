import React, { Component } from 'react'
import MenuSearch from '../components/MenuSearch'
import Properties from './Properties'

export default class MainMenus extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <MenuSearch />
                </div>
                <div className='notifications'>NOTIFICATIONS</div>
                <div className='display'>
                    <Properties />
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}