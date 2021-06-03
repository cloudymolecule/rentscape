import React, { Component } from 'react'
import { connect } from 'react-redux';
import StatesList from '../constants/StatesList'
import { postProperty } from '../actions/postProperty'
import { resetErrors } from '../actions/resetErrors'

class PropertyForm extends Component {
    
    state = {
        address:'',
        address_2:'',
        township:'',
        state:'',
        review_title:'',
        review:'',
        overall_rating:'',
        landlord_rating:'',
        cleanliness_rating:'',
        neighbors_rating:'',
        price_rating:'',
        delete_keyword: '',
        delete_keyword_confirmation: '',
        image_url: null
    }

    handleChange = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleImageChange = e => { 
        this.setState({
            image_url: e.target.files[0]
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.resetErrors()
        const formData = new FormData()
        formData.append('address', this.state.address)
        formData.append('address_2', this.state.address_2)
        formData.append('township', this.state.township)
        formData.append('state', this.state.state)
        formData.append('review_title', this.state.review_title)
        formData.append('review', this.state.review)
        formData.append('overall_rating', this.state.overall_rating)
        formData.append('landlord_rating', this.state.landlord_rating)
        formData.append('cleanliness_rating', this.state.cleanliness_rating)
        formData.append('neighbors_rating', this.state.neighbors_rating)
        formData.append('price_rating', this.state.price_rating)
        formData.append('password', this.state.delete_keyword)
        formData.append('password_confirmation', this.state.delete_keyword_confirmation)
        if (this.state.image_url !== null) {
            formData.append('image_url', this.state.image_url)
        }

        this.props.postProperty(formData)
    
        setTimeout(() => {
            if (this.props.errors.length === 0) {
                window.history.back()
            }
        }, 300)
    }

    render() {

        const StateOptions = StatesList.map(state => <option value={state} key={state}>{state}</option>)
        return (
            <form onSubmit={this.handleSubmit} className='new-property-form'>
                <h2>Add a New Rental Property</h2>
                <div className='new-property-fields'>
                    <label>Address: </label>
                    <input onChange={this.handleChange} name='address' value={this.state.address}/>
                </div>
                
                <div className='new-property-fields'>
                    <label>Address 2: </label>
                    <input onChange={this.handleChange} name='address_2' value={this.state.address_2}/>
                </div>

                <div className='new-property-fields'>
                    <label>Township: </label>
                    <input onChange={this.handleChange} name='township' value={this.state.township}/>
                </div>

                <div className='new-property-fields'>
                    <label>State: </label>
                    <select onChange={this.handleChange} name='state' value={this.state.state}>
                            <option defaultValue value=''>Select State</option>
                            {StateOptions}
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Review Title: </label>
                    <input onChange={this.handleChange} name='review_title' value={this.state.review_title}/>
                </div>

                <div >
                    <label>Review: </label>
                    <br />
                    <textarea onChange={this.handleChange} name='review' rows="8" cols="50" value={this.state.review}/>
                </div>

                <div className='new-property-fields'>
                    <label>Overall Rating: </label>
                    <select name='overall_rating' onChange={this.handleChange} value={this.state.overall_rating}>
                        <option defaultValue value=''>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Landlord: </label>
                    <select name='landlord_rating' onChange={this.handleChange} value={this.state.landlord_rating}>
                        <option defaultValue value=''>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Cleanliness: </label>
                    <select name='cleanliness_rating' onChange={this.handleChange} value={this.state.cleanliness_rating}>
                        <option defaultValue value=''>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Neighbors: </label>
                    <select name='neighbors_rating' onChange={this.handleChange} value={this.state.neighbors_rating}>
                        <option defaultValue value=''>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Price: </label>
                    <select name='price_rating' onChange={this.handleChange} value={this.state.price_rating}>
                        <option defaultValue value=''>Choose rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className='new-property-fields'>
                    <label>Select Image: </label>
                    <input onChange={this.handleImageChange} type="file" multiple={false} accept="image/png, image/jpeg" />
                </div>

                <div className='new-property-fields'>
                    <label>Delete Keyword: </label>
                    <input type='password' onChange={this.handleChange} name='delete_keyword' value={this.state.delete_keyword}/>
                </div>

                <div className='new-property-fields'>
                    <label>Delete Keyword Confirmation: </label>
                    <input type='password' onChange={this.handleChange} name='delete_keyword_confirmation' value={this.state.delete_keyword_confirmation}/>
                </div>

                <div >
                    <button type='submit'>Add Property</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ 
    errors: state.properties.errors,
    loading: state.properties.loading
 })

export default connect(mapStateToProps, { postProperty, resetErrors })(PropertyForm)