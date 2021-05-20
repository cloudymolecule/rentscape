import React, { Component } from 'react'

export default class MenuRight extends Component {
    render() {
        return (
            <div className='menu-right-cont'>
                <button className='menu-right-login-logout'>Login</button>
                <button className='menu-right-register'>Register</button>
                <button className='menu-right-reviews'>My Reviews</button>
            </div>
        )
    }
}
