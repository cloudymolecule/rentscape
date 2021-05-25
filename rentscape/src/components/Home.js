import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div>
            {/* <> <button onClick={() => window.location.href='http://localhost:3000/'} className='home-button'>Home</button> </> */}
            <>
                <Link className='property-card-link' to={'/'} >Home</Link>
            </>
        </div>
    )
}

export default Home