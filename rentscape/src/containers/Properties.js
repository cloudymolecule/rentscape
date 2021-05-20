import React, { Component } from 'react'
import Property from '../components/Property'

export default class Properties extends Component {
    render() {

        const seed = [
            {address: 'some address', photo: 'some photo', stars: 4},
            {address: 'some address', photo: 'some photo', stars: 3},
            {address: 'some address', photo: 'some photo', stars: 1},
            {address: 'some address', photo: 'some photo', stars: 2},
            {address: 'some address', photo: 'some photo', stars: 5}
        ]

        let properties = seed.map(py => <Property address={py.address} photo={py.photo} stars={py.stars}/>)

        return (
            <div className='properties'>
                {properties}
            </div>
        )
    }
}
