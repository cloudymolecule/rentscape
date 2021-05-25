import React, { Component } from 'react'
import { connect } from 'react-redux';

class PropertyDisplay extends Component {

    render() {
        
        const property = this.props.properties.filter(py => py.id == this.props.match.params.id)[0]
        
        return (
            <div>
                {console.log(property)}
            </div>
        )
    }
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps)(PropertyDisplay)




