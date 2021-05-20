import React, { Component } from 'react'

export default class menuLeft extends Component {
    render() {
        return (
            <div className='menu-left-cont'>
            <label>State:</label>
            <input />

            <label>Township:</label>
            <input />

            <button>Sort By</button>

            <button>Add Review</button>
        </div>
        )
    }
}
