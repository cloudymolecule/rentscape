import React, { Component } from 'react'
import Property from '../components/Property'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/fetchProperties'

class Properties extends Component {
    
    componentDidMount(){
        this.props.fetchProperties()
    }

    handleOnLoad = () => {
        if (this.props.loading) {
            return <h1>Loading properties</h1>
        } else {
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
            return properties
        }
    }

    render() {
        return (
            <div className='properties'>
                {this.handleOnLoad()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        properties: state.properties.sortedProperties,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchProperties })(Properties)