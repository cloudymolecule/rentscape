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
        if (this.props.properties.length === 0) {
            this.props.fetchProperty(this.props.match.params.id)
        } 
        setTimeout(() => {
            const property = this.props.properties.filter(property => property.id === parseInt(this.props.match.params.id))[0]
            this.setState({
                property
            })
        }, 60)
    }

    componentWillUnmount(){
        this.props.resetErrors()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <h1>LOADING</h1>
        } else {
            return (
                <>
                    <div className='nav'>
                        <div className='logo'></div>
                        <Home />
                    </div>
                    <div className='notifications'>
                        <Notifications errors={this.props.errors} address={`${this.state.property.address} - ${this.state.property.address_2}, ${this.state.property.township} ${this.state.property.state}`}/>
                    </div>
                    <div className='display'>
                        <PropertyShow 
                            address={this.state.property.address}
                            address_2={this.state.property.address_2}
                            cleanliness_rating={this.state.property.cleanliness_rating}
                            id={this.state.property.id}
                            image_url={this.state.property.image_url}
                            landlord_rating={this.state.property.landlord_rating}
                            neighbors_rating={this.state.property.neighbors_rating}
                            overall_rating={this.state.property.overall_rating}
                            price_rating={this.state.property.price_rating}
                            review={this.state.property.review}
                            review_title={this.state.property.review_title}
                            state={this.state.property.state}
                            township={this.state.property.township}
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