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
                <PropertyShow />
            </div>
            <div className='footer'>FOOTER</div>
        </>
    )
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps)(PropertyDisplay)
