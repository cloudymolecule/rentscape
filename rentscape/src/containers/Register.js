import React, { Component } from 'react'
import RegisterForm from '../components/RegisterForm'
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
                    <RegisterForm />
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}