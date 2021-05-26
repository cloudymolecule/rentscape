import React from 'react'
import ReviewForm from '../components/PropertyForm'
import Home from '../components/Home'

const NewProperty = () => {
    
    return (
        <>
            <div className='nav'>
                <div className='logo'></div>
                <Home />
            </div>
            <div className='notifications'>NOTIFICATIONS</div>
            <div className='display'>
                <ReviewForm />
            </div>
            <div className='footer'>FOOTER</div>
        </>
    )
}

export default NewProperty