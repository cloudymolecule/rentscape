import React, { Component } from 'react'

export default class MenuRight extends Component {
    
    handleRegisterClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/register';
  
    }

    handleLoginClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/login';
  
    }
    
    render() {
        
        return (
            <div className='menu-right-cont'>
                <button className='menu-right-login-logout' onClick={this.handleLoginClick}>Login</button>
                <button className='menu-right-register' onClick={this.handleRegisterClick}>Register</button>
                <button className='menu-right-reviews'>My Reviews</button>
            </div>
        )
    }
}
