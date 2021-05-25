// import React from 'react'
// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux';

// class PropertyDisplay extends Component {
    
//     render() {
//         return (
//             <div>
//                 {console.log(this.props.properties)}
//             </div>
//         )
//     }
// }

export const PropertyDisplay = ({match}) => {
    return (
        <div>
            {console.log(match)}
        </div>
    )
}

const mapStateToProps = state => ({properties: state.properties})

export default connect(mapStateToProps)(PropertyDisplay)




