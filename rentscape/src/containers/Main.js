import React, { Component } from 'react'
import MenuRight from '../components/MenuRight'
import MenuLeft from '../components/MenuLeft'
import Properties from './Properties'

export default class MainMenus extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <MenuLeft />
                    <MenuRight />
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