import React, { Component } from 'react'
import Property from '../components/Property'
import { addProperty } from '../actions/properties'
import { connect } from 'react-redux';

class Properties extends Component {
    
    componentDidMount(){
        if (this.props.properties.length === 0) {
            console.log('we are inside if', this.props.properties.length)
            const baseUrl = 'http://localhost:4000/properties'
            fetch(baseUrl)
            .then(res => res.json())
            .then(properties => {
                properties.map(py => this.props.addProperty(py))
            })
        }
    }

    render() {
        const properties = this.props.properties.map(py => <Property 
            key={py.id}
            id={py.id}
            address={py.address}
            address_2={py.address_2}
            state={py.state}
            township={py.township}
            overall_rating={py.overall_rating}
            image_url={py.image_url}
        />)

        return (
            <div className='properties'>
                {properties}
            </div>
        )
    }
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps, { addProperty })(Properties)