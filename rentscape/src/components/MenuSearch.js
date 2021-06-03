import React, { Component } from 'react'
import StatesList from '../constants/StatesList'
import SortBy from './SortBy'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateSortedProperties } from '../actions/updateSortedProperties'

class MenuSearch extends Component {
    
    state = {
        state: 'All',
        township: '',
        properties: this.props.properties,
        resetSort: 1
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSearchBttn = () => {
        let properties = this.props.properties
        
        if (this.state.state === 'All' && this.state.township === '') {
            properties = this.props.properties
        } else if (this.state.state === 'All') {
            properties = properties.filter(property => property.township.toUpperCase().search(this.state.township.toUpperCase()) !== -1)
        } else if (this.state.township === '') {
            properties = properties.filter(property => property.state === this.state.state)
        } else {
            properties = properties.filter(property => property.state === this.state.state)
            properties = properties.filter(property => property.township.toUpperCase().search(this.state.township.toUpperCase()) !== -1)
        }
        this.props.updateSortedProperties(properties)
        const num = this.state.resetSort === 1 ? 2 : 1
        this.setState({resetSort: num})
    }

    render() {

        const StateOptions = StatesList.map(state => <option value={state} key={state}>{state}</option>)

        return (
            <div className='menu-search'>
                <label className='menu-search-label'>State: </label>
                <select name='state' onChange={this.handleChange}>
                    <option value='All'>All</option>
                    {StateOptions}
                </select>
                <label className='menu-search-label'>Township: </label>
                <input name='township' onChange={this.handleChange} value={this.state.township}/>
                <SortBy resetSort={this.state.resetSort}/>
                <button onClick={this.handleSearchBttn}>Search</button>
                <Link className='property-card-link' to={'/add-property'} >Add Property</Link>
                <Link className='property-card-link' to={'/about'} >About</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    properties: state.properties.properties,
    sortedProperties: state.properties.sortedProperties
})

export default connect(mapStateToProps, { updateSortedProperties })(MenuSearch) 