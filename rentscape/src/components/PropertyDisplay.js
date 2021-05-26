// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux';

const PropertyDisplay = (props) => {

    const property = props.properties.filter(py => py.id === parseInt(props.match.params.id))[0]
    
    return (
        <div>
            {console.log(property.address)}
        </div>
    )
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps)(PropertyDisplay)
