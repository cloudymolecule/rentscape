import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import PropertyShow from './PropertyShow'
import Notifications from './Notifications'
import { resetErrors, fetchProperty } from '../actions/properties'

class PropertyDisplay extends Component {
    
    componentDidMount() {
        if (this.props.properties.length === 0) {
            this.props.fetchProperty(this.props.match.params.id)
        } 
        
    }

    componentWillUnmount(){
        this.props.resetErrors()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <h1>LOADING</h1>
        } else {
            const property = this.props.properties.filter(property => property.id === parseInt(this.props.match.params.id))[0]
            return (
                <>
                    <div className='nav'>
                        <div className='logo'></div>
                        <Home />
                    </div>
                    <div className='notifications'>
                        <Notifications errors={this.props.errors} address={`${property.address} - ${property.address_2}, ${property.township} ${property.state}`}/>
                    </div>
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
                    <div className='footer'>Copyright © 2021 Dario Carlino</div>
                </>
            )
        }
    }
    
    render() {
        return (
            <>
                {this.handleLoading()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.properties.errors,
    properties: state.properties.properties,
    loading: state.properties.loading
})

export default connect(mapStateToProps, { resetErrors, fetchProperty })(PropertyDisplay)