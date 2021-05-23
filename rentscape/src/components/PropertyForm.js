import React, { Component } from 'react'
import StatesList from './StatesList'


export default class ReviewForm extends Component {
    
    state = {
        address:'',
        address2:'',
        township:'',
        state:'',
        reviewTitle:'',
        review:'',
        overallRating:'',
        landlordRating:'',
        cleanlinessRating:'',
        neighborsRating:'',
        priceRating:'',
        image:''
    }

    handleChange = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newProperty = {...this.state}
        this.setState({
            address:'',
            address2:'',
            township:'',
            state:'',
            reviewTitle:'',
            review:'',
            overallRating:'',
            landlordRating:'',
            cleanlinessRating:'',
            neighborsRating:'',
            priceRating:'',
            image:''
        })
        console.log(newProperty)
    }

    render() {

        const StateOptions = StatesList.map(state => <option value={state}>{state}</option>)
        
        return (
            <form onSubmit={this.handleSubmit} className='new-property-form'>
                <h1>Add a New Rental Property</h1>
                
                <div className='new-property-fields'>
                    <label>Address: </label>
                    <input onChange={this.handleChange} name='address' value={this.state.address}/>
                </div>
                
                <div className='new-property-fields'>
                    <label>Address 2: </label>
                    <input onChange={this.handleChange} name='address2' value={this.state.address2}/>
                </div>

                <div className='new-property-fields'>
                    <label>Township: </label>
                    <input onChange={this.handleChange} name='township' value={this.state.township}/>
                </div>

                <div className='new-property-fields'>
                    <label>State: </label>
                    <select onChange={this.handleChange} name='state' value={this.state.state}>
                            <option selected disabled>Select State</option>
                            {StateOptions}
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Review Title: </label>
                    <input onChange={this.handleChange} name='reviewTitle' value={this.state.reviewTitle}/>
                </div>

                <div >
                    <label>Review: </label>
                    <br />
                    <textarea onChange={this.handleChange} name='review' rows="8" cols="50" value={this.state.review}/>
                </div>

                <div className='new-property-fields'>
                    <label>Overall Rating: </label>
                    <select name='overallRating' onChange={this.handleChange} value={this.state.overallRating}>
                        <option selected disabled>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Landlord: </label>
                    <select name='landlordRating' onChange={this.handleChange} value={this.state.landlordRating}>
                        <option selected disabled>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Cleanliness: </label>
                    <select name='cleanlinessRating' onChange={this.handleChange} value={this.state.cleanlinessRating}>
                        <option selected disabled>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Neighbors: </label>
                    <select name='neighborsRating' onChange={this.handleChange} value={this.state.neighborsRating}>
                        <option selected disabled>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Price: </label>
                    <select name='priceRating' onChange={this.handleChange} value={this.state.priceRating}>
                        <option selected disabled>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Select Image: </label>
                    <input onChange={this.handleChange} type="file" id="image" name="image" accept="image/*" />
                </div>

                <div >
                    <button type='submit'>Add Property</button>
                </div>
            </form>
        )
    }
}
