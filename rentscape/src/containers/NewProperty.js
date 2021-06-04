import React, { Component } from 'react'
import ReviewForm from '../components/PropertyForm'
import Home from '../components/Home'
import { connect } from 'react-redux'
import Notifications from '../components/Notifications'
import { resetErrors } from '../actions/properties'

class NewProperty extends Component {

    componentWillUnmount(){
        this.props.resetErrors()
    }

    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <Home />
                </div>
                <div className='notifications'>
                    <Notifications className='notifications' errors={this.props.errors}/>    
                </div>
                <div className='display'>
                    <ReviewForm />
                </div>
                <div className='footer'>FOOTER</div>
            </>
        )
    }
}

const mapStateToProps = state => ({errors: state.properties.errors})

export default connect(mapStateToProps, { resetErrors })(NewProperty)
