import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import MenuRightHome from '../components/MenuRightHome'

export default class MainMenus extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <div></div>
                    <MenuRightHome />
                </div>
                <div className='notifications'>NOTIFICATIONS</div>
                <div className='display'>
                    <LoginForm />
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}