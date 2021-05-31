// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import PropertyShow from './PropertyShow'
import Notifications from './Notifications'
import { resetErrors } from '../actions/resetErrors'
import { fetchProperty } from '../actions/fetchProperty'


class PropertyDisplay extends Component {
    
    state = {
        property: []
    }

    componentDidMount() {
        this.props.fetchProperty(this.props.match.params.id)
        const property = this.props.properties.filter(property => property.id === parseInt(this.props.match.params.id))[0]
        console.log(property)
        this.setState({
            property
        })
    }

    componentWillUnmount(){
        this.props.resetErrors()
    }
    
    render() {
        const {address, address_2, cleanliness_rating, id, image_url, landlord_rating, neighbors_rating, overall_rating, price_rating, review, review_title, state, township} = this.state.property
        return (
                <>
                    <div className='nav'>
                        <div className='logo'></div>
                        <Home />
                    </div>
                    <div className='notifications'>
                        <Notifications errors={this.props.errors} address={`${address} - ${address_2}, ${township} ${state}`}/>
                    </div>
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

const mapStateToProps = state => ({
    errors: state.properties.errors,
    properties: state.properties.properties
})

export default connect(mapStateToProps, { resetErrors, fetchProperty })(PropertyDisplay)