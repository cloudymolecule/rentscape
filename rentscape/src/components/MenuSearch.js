import React, { Component } from 'react'
import StatesList from '../constants/StatesList'
import { Link } from 'react-router-dom'

export default class menuSearch extends Component {
    
    handleAddPropertyClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/add-property';
    }
    
    handleAboutClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/about';
  
    }

    render() {

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
                    <button>Sort By</button>
                    <button>Search</button>
                    <Link className='property-card-link' to={'/add-property'} >Add Property</Link>
                    {/* <button onClick={this.handleAddPropertyClick}>Add Property</button> */}
                    <button onClick={this.handleAboutClick}>About</button>
            </div>
        )
    }
}
