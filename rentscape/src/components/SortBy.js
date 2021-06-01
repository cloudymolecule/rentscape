import React, { Component } from 'react'
import { connect } from 'react-redux'

class SortBy extends Component {

    state = {
        sortBy: 'Sort By',
        sortOption: 1,
        sortedProperties: []
    }

    sortByClick = (e) => {
        let properties = this.props.properties
        switch (this.state.sortOption) {
            case 1:
                this.setState({sortOption: 2, sortBy: 'State'})
                properties.sort((a, b) => (a.state > b.state) ? 1 : -1)
                // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
                return properties
                // break
            case 2:
                this.setState({sortOption: 3, sortBy: 'Rating'})
                properties.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
                console.log(properties)

                return properties

                // break
            case 3:
                this.setState({sortOption: 1, sortBy: `Image present`})
                
                // properties.map()

                // properties.filter(property => console.log(property.image_url) )

                console.log(properties)
                return properties
                
                // break
            default:
                break
        }
    }

    render() {
        return (
            <>
                <button onClick={this.sortByClick}>{this.state.sortBy}</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.properties.properties
})

export default connect(mapStateToProps)(SortBy)

// const properties = (state = { properties: [], errors: [], loading: false }, action) => {
//     switch (action.type) {
//         case 'LOADING_PROPERTIES':
//             return {
//                 ...state,
//                 properties: [...state.properties],
//                 loading: true
//             }
        
//         case 'ADD_PROPERTIES':
//             return {
//                 ...state,
//                 properties: action.properties,
//                 loading: false
//             }
        