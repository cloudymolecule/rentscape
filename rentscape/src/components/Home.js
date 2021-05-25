import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Home extends Component {
    
    handleHomeClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/';
  
    }

    render() {
        return (
            <> <button onClick={this.handleHomeClick} className='home-button'>Home</button> </>
            // <><Link className='property-card-link' to={'/'} >Home</Link></>
        )
    }
}
