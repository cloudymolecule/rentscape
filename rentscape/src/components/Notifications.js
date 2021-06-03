import React from 'react'

const Notifications = (props) => {
    const notificationCheck = () => {
        if (props.errors) {
            if (props.errors.length > 0) {
                const errors = props.errors.join(' | ')
                return <p className='error-display'>{errors}</p>
            } 
        } else if (props.totalProperties) {
            return <p>{props.totalProperties} results</p>
        } else if (props.totalProperties === 0) {
            return <p>0 results</p>
        } 
        return <p></p>
    }
    return (<>{notificationCheck()}</>)
}

export default Notifications