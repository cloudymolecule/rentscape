import React, { Component } from 'react'

class SortBy extends Component {

    state = {
        sortBy: 'Sort By',
        sortOption: 1,
        sortedProperties: []
    }

    sortByClick = (e) => {
        switch (this.state.sortOption) {
            case 1:
                this.setState({sortOption: 2, sortBy: 'State'})
                break
            case 2:
                this.setState({sortOption: 3, sortBy: 'Rating'})
                break
            case 3:
                this.setState({sortOption: 1, sortBy: `Image present`})
                break
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

export default SortBy

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
        