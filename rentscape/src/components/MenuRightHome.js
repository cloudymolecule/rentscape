import React, { Component } from 'react'

export default class MenuRight extends Component {
    
    handleHomeClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/';
  
    }

    render() {
        
        return (
            <div className='menu-right-cont'>
                <button onClick={this.handleHomeClick}>Home</button>
                <div></div>
                <div></div>
            </div>
        )
    }
}
