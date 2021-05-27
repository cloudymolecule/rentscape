// import React, { Component } from 'react'
import React from 'react'
import Home from './Home'
import PropertyShow from './PropertyShow'
import { connect } from 'react-redux';

const PropertyDisplay = (props) => {

    const property = props.properties.filter(py => py.id === parseInt(props.match.params.id))[0]
    
    return (
        <>
            <div className='nav'>
                <div className='logo'></div>
                <Home />
            </div>
            <div className='notifications'>NOTIFICATIONS</div>
            <div className='display'>
                <PropertyShow 
                    address={property.address}
                    address_2={property.address_2}
                    cleanliness_rating={property.cleanliness_rating}
                    id={property.id}
                    image_url={property.image_url.url}
                    landlord_rating={property.landlord_rating}
                    neighbors_rating={property.neighbors_rating}
                    overall_rating={property.overall_rating}
                    price_rating={property.price_rating}
                    review={property.review}
                    review_title={property.review_title}
                    state={property.state}
                    township={property.township}
                />
            </div>
            <div className='footer'>FOOTER</div>
        </>
    )
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps)(PropertyDisplay)
