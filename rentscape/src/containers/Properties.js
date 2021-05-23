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

        let properties = this.state.properties.map(py => <Property address={py.address} photo={py.photo} stars={py.stars}/>)

        return (
            <div className='properties'>
                {properties}
            </div>
        )
    }
}
