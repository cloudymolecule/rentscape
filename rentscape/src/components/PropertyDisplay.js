// import React from 'react'
import React, { Component } from 'react'
import Home from './Home'
import PropertyShow from './PropertyShow'

class PropertyDisplay extends Component {
    
    state = {
        property: []
    }

    componentDidMount() {
        const baseUrl = `http://localhost:4000/properties/${this.props.match.params.id}`
            fetch(baseUrl)
            .then(res => res.json())
            .then(property => {
                this.setState({
                    property
                })
            })
    }
    
    render() {
        const {address, address_2, cleanliness_rating, id, image_url, landlord_rating, neighbors_rating, overall_rating, price_rating, review, review_title, state, township} = this.state.property
        return (
                <>
                    <div className='nav'>
                        <div className='logo'></div>
                        <Home />
                    </div>
                    <div className='notifications'>{address} - {address_2}, {township} {state}</div>
                    <div className='display'>
                        <PropertyShow 
                            address={address}
                            address_2={address_2}
                            cleanliness_rating={cleanliness_rating}
                            id={id}
                            image_url={image_url}
                            landlord_rating={landlord_rating}
                            neighbors_rating={neighbors_rating}
                            overall_rating={overall_rating}
                            price_rating={price_rating}
                            review={review}
                            review_title={review_title}
                            state={state}
                            township={township}
                        />
                    </div>
                    <div className='footer'>Copyright © 2021 Dario Carlino</div>
                </>
        )
    }
}

export default PropertyDisplay