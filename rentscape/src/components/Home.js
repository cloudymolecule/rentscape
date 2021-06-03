import React from 'react'

const Home = () => {
    
    return (
        
        <div>
            <button className='home-button' onClick={() => window.history.back()}>Home</button>
        </div>
    )
}

export default Home