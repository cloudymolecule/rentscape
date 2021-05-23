import React, { Component } from 'react'
import StatesList from './StatesList'

export default class ReviewForm extends Component {
    
    render() {

        const StateOptions = StatesList.map(state => <option value={state}>{state}</option>)
        
        return (
            <form className='new-property-form'>
                <h1>Add a New Rental Property</h1>
                
                <div>
                    <label>Address: </label>
                    <input />
                </div>
                
                <div>
                    <label>Address 2: </label>
                    <input />
                </div>

                <div>
                    <label>Township: </label>
                    <input />
                </div>

                <div>
                    <label>State: </label>
                    <select>
                            <option value='All'>All</option>
                            {StateOptions}
                    </select>
                </div>

                <div>
                    <label for="img">Select image: </label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    {/* <input type="submit"></input> */}
                </div>

                <div>
                    <label>Review: </label>
                    <br />
                    <textarea />
                </div>

                <div>
                    <button type='submit'>Add Property</button>
                </div>
            </form>
        )
    }
}
