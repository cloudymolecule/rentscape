// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux';

// const PropertyDisplay = (props) => {
//     return (
//         <div>
//             {/* {console.log(props.match.params.id)} */}
//             {/* {console.log(this.props.properties)} */}
//             <h1>This is each house by itself, basking in all glory</h1>
//         </div>
//     )
// }

const mapStateToProps = state => ({properties: state.properties})





class PropertyDisplay extends Component {
    
    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(PropertyDisplay)