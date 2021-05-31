// import React, { Component } from 'react'
import React from 'react'
import StatesList from '../constants/StatesList'
import SortBy from './SortBy'
import { Link } from 'react-router-dom'

const MenuSearch = () => {

    const StateOptions = StatesList.map(state => <option value={state} key={state}>{state}</option>)
    
    return (
        <div className='menu-search'>
            <label>State: </label>
            <select>
                <option value='All'>All</option>
                {StateOptions}
            </select>
            <label>Township: </label>
            <input />
            <SortBy />
            <button>Search</button>
            <Link className='property-card-link' to={'/add-property'} >Add Property</Link>
            <Link className='property-card-link' to={'/about'} >About</Link>
        </div>
    )
}

export default MenuSearch
