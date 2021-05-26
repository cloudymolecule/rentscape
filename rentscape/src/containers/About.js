import React from 'react'
import Home from '../components/Home'

const About = () => {
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

export default About