import React from 'react'
import ReviewForm from '../components/PropertyForm'
import Home from '../components/Home'
import { connect } from 'react-redux'

const NewProperty = (props) => {
    
    console.log(props.errors)

    const errorCheck = () => {
        if (props.errors.length > 0) {
            const errors = props.errors.join(' | ')
            return <p className='error-display'>{errors}</p>
        } else {
            return <p></p>
        }
    }
    
    return (
        <>
            <div className='nav'>
                <div className='logo'></div>
                <Home />
            </div>
            <div className='notifications'>{errorCheck()}</div>
            <div className='display'>
                <ReviewForm />
            </div>
            <div className='footer'>FOOTER</div>
        </>
    )
}

const mapStateToProps = state => ({errors: state.properties.errors})

export default connect(mapStateToProps)(NewProperty)