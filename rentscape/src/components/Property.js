import React from 'react'

const Property = (props) => {
    return (
        <div className='flip-property'>
            <div className='flip-property-inner'>
                <div className='flip-property-front'>
                    <h3>{props.address}</h3>
                    <p>{props.photo}</p>
                    <p>{props.stars}</p>
                </div>
                <div className="flip-property-back">
                    <p>{props.photo}</p>
                </div>
            </div>
        </div>
    )
}

export default Property
