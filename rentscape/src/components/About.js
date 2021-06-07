import React from 'react'
import Home from './Home'

const About = () => {
    return (
        <>
            <div className='nav'>
                <div className='logo'></div>
                <Home />
            </div>
            <div className='notifications'></div>
            <div className='about'>
                <h1>Rentscape</h1>
                <h3>Rentscape allows you to review rental properties anonymously. Rentscape allows you to share your rental experience with the world and help you and others make an informed decision before signing the lease agreement.</h3>
                <h2>Sorting Properties</h2>
                <p>On the main page, on the top right corner you'll find the search menu, where you'll access filtering options to search for properties.</p>
                <h2>Adding a property review</h2>
                <p>When you click on Add Property you'll be taken to the form where you can add a new property review, please note that a photo/image is not necessary but if you decide to upload one make sure it's in the JPG or PNG format. Save the delete keyword somewhere safe, you'll need it if you ever plan on deleting your review.</p>
                <h2>Deleting a property review</h2>
                <p>At the bottom of the review page, you'll find a field to submit the delete keyword, by pressing 'delete' you're review will be permanently deleted from Rentscape.</p>
            </div>
            <div className='footer'>Copyright © 2021 Dario Carlino</div>
        </>
    )
}

export default About