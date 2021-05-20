import React from 'react'

const Property = (props) => {
    return (
        <div className='property'>
            <h3>{props.address}</h3>
            <p>{props.photo}</p>
            <p>{props.stars}</p>
        </div>
    )
}

export default Property