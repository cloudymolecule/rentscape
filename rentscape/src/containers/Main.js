import React, { Component } from 'react'
import MenuSearch from '../components/MenuSearch'
import Properties from './Properties'
import Notifications from '../components/Notifications'
import { connect } from 'react-redux'

class Main extends Component {
    render() {
        return (
            <>
                <div className='nav'>
                    <div className='logo'></div>
                    <MenuSearch />
                </div>
                <div className='notifications'>
                    <Notifications totalProperties={this.props.totalProperties} />
                </div>
                <div className='display'>
                    <Properties />
                </div>
                <div className='footer'>Copyright © 2021 Dario Carlino</div>
            </>
        )
    }
}

const mapStateToProps = state => ({totalProperties: state.properties.properties.length})

export default connect(mapStateToProps)(Main)