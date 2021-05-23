import React, { Component } from 'react'
import MenuRightReviews from '../components/MenuRightReviews'
import ReviewForm from '../components/ReviewForm'

export default class MainMenus extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <div></div>
                    <MenuRightReviews />
                </div>
                <div className='notifications'>NOTIFICATIONS</div>
                <div className='display'>
                    <ReviewForm />
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}