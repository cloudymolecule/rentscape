import React from 'react'

const PropertyShow = (props) => {
    return (
        <div className="property-show">
            <div className='property-show-info'>
                <hr />
                    <h2>{props.address}, {props.state}</h2>
                <hr />
                <ul>
                    <li>{props.address} - {props.address_2}, {props.township} {props.state}</li>
                    <li>Overall Rating: {props.overall_rating}</li>
                    <li>Landlord Rating: {props.landlord_rating}</li>
                    <li>Neighbors Rating: {props.neighbors_rating}</li>
                    <li>Price Rating: {props.price_rating}</li>
                    <li>Cleanliness Rating: {props.cleanliness_rating}</li>
                </ul>
            </div>
            <img className='property-show-image' src={props.image_url} alt=''/>
            <div className='property-show-review'>
                <h2 className='property-show-review-title'>{props.review_title}</h2>
                <p>{props.review}</p>
            </div>
            
            
        </div>
    )
}

export default PropertyShow

// id={property.id}
// review={property.review}