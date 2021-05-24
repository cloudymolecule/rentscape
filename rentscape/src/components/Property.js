import React from 'react'
import { Link } from 'react-router-dom'

const Property = (props) => {
    
    return (
        <div className='flip-property'>
            <div className='flip-property-inner'>
                <div className='flip-property-front' style={{backgroundImage: `url(${props.image_url})`}}>
                    <h3>{props.address}, {props.address_2} </h3>
                    <p>State: {props.state}</p>
                    <p>Township: {props.township}</p>
                </div>
                <div className="flip-property-back" style={{backgroundImage: `url(${props.image_url})`}}>
                    <div className='flip-property-back-button'>
                        <Link className='property-card-link' to={`/properties/${props.id}`} >View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property

