import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSortedProperties } from '../actions/updateSortedProperties'

class SortBy extends Component {
    
    state = {
        sortBy: 'Sort By',
        sortOption: 1,
        sortedProperties: this.props.sortedProperties
    }

    componentDidMount(){
        setTimeout(() => {this.setState({ sortedProperties: this.props.sortedProperties }) }, 200)
    }
       

    sortByClick = (e) => {
        let properties = this.props.sortedProperties
            switch (this.state.sortOption) {
                case 1:
                    properties.sort((a, b) => (a.state > b.state) ? 1 : -1)
                    this.setState({sortOption: 2, sortBy: 'State', sortedProperties: properties})
                    break
                case 2:
                    properties.sort((a, b) => (a.overall_rating > b.overall_rating) ? -1 : 1)
                    this.setState({sortOption: 3, sortBy: 'Rating', sortedProperties: properties})
                    break
                case 3:
                    properties = properties.filter(property => property.image_url.search('defaultProperty.png') === -1)
                    this.setState({sortOption: 4, sortBy: 'Has image', sortedProperties: properties})
                    break
                case 4:
                    this.setState({sortOption: 1, sortBy: 'Sort By', sortedProperties: this.props.properties})
                    break
                default:
                    break
            }
        this.props.updateSortedProperties(properties)
    }

    render() {
        return (
            <>
                <button onClick={this.sortByClick}>{this.state.sortBy}</button>
            </>
        )
    }
}

const mapStateToProps = state => ({ sortedProperties: state.properties.sortedProperties })


export default connect(mapStateToProps, { updateSortedProperties })(SortBy)
