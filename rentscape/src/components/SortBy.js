import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSortedProperties } from '../actions/updateSortedProperties'

class SortBy extends Component {
    
    state = {
        sortBy: 'Sort By',
        sortOption: 1,
        sortedProperties: this.props.sortedProperties
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.resetSort !== this.props.resetSort) {
          this.setState({sortBy: 'Sort By', sortOption: 1})
        }
    }

    sortByClick = (e) => {
        let properties = this.props.sortedProperties
            switch (this.state.sortOption) {
                case 1:
                    properties.sort((a, b) => (a.state > b.state) ? 1 : -1)
                    this.setState({ sortOption: 2, sortBy: 'State' })
                    break
                case 2:
                    properties.sort((a, b) => (a.overall_rating > b.overall_rating) ? -1 : 1)
                    this.setState({ sortOption: 3, sortBy: 'Rating' })
                    break
                case 3:
                    const withImage = properties.filter(property => property.image_url.search('defaultProperty.png') === -1)
                    const withoutImage = properties.filter(property => property.image_url.search('defaultProperty.png') !== -1)
                    properties = withImage.concat(withoutImage)
                    this.setState({ sortOption: 4, sortBy: 'Has image' })
                    break
                case 4:
                    this.setState({ sortOption: 1, sortBy: 'Sort By' })
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
