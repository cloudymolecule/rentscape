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

        const property = this.state.property

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
                            image_url={property.image_url}
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
}

export default PropertyDisplay