import React, { Component } from 'react'
import Property from '../components/Property'

export default class Properties extends Component {
    
    state = {
        properties: []
    }

    componentDidMount(){
        const baseUrl = 'http://localhost:4000/properties'

        fetch(baseUrl)
        .then(res => res.json())
        .then(properties => {
            this.setState({
                properties
            })
        })
    }

    render() {

        let properties = this.state.properties.map(py => <Property 
            key={py.id}
            id={py.id}
            address={py.address}
            address_2={py.address_2}
            state={py.state}
            township={py.township}
            overall_rating={py.overall_rating}
            image_url={py.image_url.url}
        />)

        return (
            <div className='properties'>
                {properties}
            </div>
        )
    }
}
