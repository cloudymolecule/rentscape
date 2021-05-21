import React, { Component } from 'react'
import StatesList from './StatesList'

export default class menuLeft extends Component {
    render() {

        const StateOptions = StatesList.map(state => <option value={state}>{state}</option>)

        return (
            <div className='menu-left-cont'>
            <label>State:</label>
            <select>
                <option value='All'>All</option>
                {StateOptions}
            </select>

            <label>Township:</label>
            <div>
                <input />
                <button>Search</button>
            </div>
            <button>Sort By</button>

            <button>Add Review</button>
        </div>
        )
    }
}
