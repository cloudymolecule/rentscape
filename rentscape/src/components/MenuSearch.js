import React, { Component } from 'react'
import StatesList from './StatesList'

export default class menuLeft extends Component {
    
    handleAddReviewClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/add-review';
  
    }
    
    handleAboutClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/about';
  
    }

    render() {

        const StateOptions = StatesList.map(state => <option value={state}>{state}</option>)

        

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
                    <button onClick={this.handleAddReviewClick}>Add Review</button>
                    <button onClick={this.handleAboutClick}>About</button>
            </div>
        )
    }
}
