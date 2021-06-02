import React, { Component } from 'react'
import StatesList from '../constants/StatesList'
import SortBy from './SortBy'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { updateSortedProperties } from '../actions/updateSortedProperties'

class MenuSearch extends Component {
    
    state = {
        state: '',
        township: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSearchBttn = () => {
        let properties = this.props.sortedProperties
        if (this.state.state === '' && this.state.township === '' ) {
            return properties
        } else if (this.state.state === '') {
            properties = properties.filter(property => property.township === this.state.township)
        } else if (this.state.township === '') {
            properties = properties.filter(property => property.state === this.state.state)
        } else {
            properties = properties.filter(property => property.state === this.state.state)
            properties = properties.filter(property => property.township === this.state.township)
        }
        this.props.updateSortedProperties(properties)
    }

    render() {

        const StateOptions = StatesList.map(state => <option value={state} key={state}>{state}</option>)

        return (
            <div className='menu-search'>
                <label>State: </label>
                <select name='state' onChange={this.handleChange}>
                    <option value='All'>All</option>
                    {StateOptions}
                </select>
                <label>Township: </label>
                <input name='township' onChange={this.handleChange} value={this.state.township}/>
                <SortBy />
                <button onClick={this.handleSearchBttn}>Search</button>
                <Link className='property-card-link' to={'/add-property'} >Add Property</Link>
                <Link className='property-card-link' to={'/about'} >About</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({ sortedProperties: state.properties.sortedProperties })

export default connect(mapStateToProps, { updateSortedProperties })(MenuSearch) 