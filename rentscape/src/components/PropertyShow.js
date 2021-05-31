import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProperty } from '../actions/deleteProperty'

class PropertyShow extends Component {
    
    state = {
        password: ''
    }
    
    handleChange = e => {
        this.setState({
          password: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const deleteObj = {
            id: this.props.id,
            password: this.state.password
        }
        this.props.deleteProperty(deleteObj)
    }
    
    render() {
        return (
            <div className="property-show">
            <div className='property-show-info'>
                <hr />
                    <h2>{this.props.address}, {this.props.state}</h2>
                <hr />
                <ul>
                    <li>{this.props.address} - {this.props.address_2}, {this.props.township} {this.props.state}</li>
                    <li>Overall Rating: {this.props.overall_rating}</li>
                    <li>Landlord Rating: {this.props.landlord_rating}</li>
                    <li>Neighbors Rating: {this.props.neighbors_rating}</li>
                    <li>Price Rating: {this.props.price_rating}</li>
                    <li>Cleanliness Rating: {this.props.cleanliness_rating}</li>
                </ul>
            </div>
            <img className='property-show-image' src={this.props.image_url} alt=''/>
            <div className='property-show-review-container'>
                <div className='property-show-review'>
                    <h2 className='property-show-review-title'>{this.props.review_title}</h2>
                    <p>{this.props.review}</p>
                </div>
            </div>
            <form onSubmit={this.handleSubmit} className='property-show-delete-form'>
                <h3>Delete Review</h3>
                <label>Delete Keyword: </label>
                <input onChange={this.handleChange} value={this.state.password}/>
                <button>Delete</button>
            </form>
        </div>
        )
    }
}

export default connect(null, { deleteProperty })(PropertyShow)


// id={property.id}