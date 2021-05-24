import React from 'react'

const Property = (props) => {
    
    let handleClick = () => {
        console.log('this is house', props.id)
    }

    return (
        <div className='flip-property'>
            <div className='flip-property-inner'>
                <div className='flip-property-front' style={{backgroundImage: `url(${props.image_url})`}}>
                    <h3>{props.address}, {props.address_2} </h3>
                    <p>State: {props.state}</p>
                    <p>Township: {props.township}</p>
                </div>
                <div onClick={handleClick} className="flip-property-back">
                    <img className='flip-property-image' src={props.image_url} alt={props.address}/>
                </div>
            </div>
        </div>
    )
}

export default Property

