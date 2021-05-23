import React, { Component } from 'react'
import StatesList from './StatesList'

export default class menuLeft extends Component {
    
    handleAddReviewClick = (e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/add-property';
  
    }
    
    render() {

        const StateOptions = StatesList.map(state => <option value={state}>{state}</option>)

        

        return (
            // <div className='menu-left-cont'>
            <div className='menu-left-cont'>
                <div>
                    <label>State: </label>
                    <select>
                        <option value='All'>All</option>
                        {StateOptions}
                    </select>
                </div>

                <div>
                    <label>Township: </label>
                    <input />
                    <button>Search</button>
                </div>
                <div></div>
                <div>
                    <button>Sort By</button>
                    <button onClick={this.handleAddReviewClick}>Add Review</button>
                </div>
            </div>
        )
    }
}
