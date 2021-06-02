import React, { Component } from 'react'
import StatesList from '../constants/StatesList'
import SortBy from './SortBy'
import { Link } from 'react-router-dom'

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
        console.log(this.state)
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

export default MenuSearch 