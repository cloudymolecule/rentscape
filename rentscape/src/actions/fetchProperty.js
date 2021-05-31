// export const fetchProperties = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_PROPERTIES' })
//         fetch('http://localhost:4000/properties')
//         .then(res => res.json())
//         .then(properties => {
//             console.log('we are fetching', properties)
//             dispatch({ type: 'ADD_PROPERTIES', properties})
//         })
//     }
// }


export const fetchProperty = id => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROPERTY' })
        fetch(`http://localhost:4000/properties/${id}`)
        .then(res => res.json())
        .then(property => {
            dispatch({ type: 'ADD_PROPERTY' })
        })
    }
}


// const baseUrl = `http://localhost:4000/properties/${this.props.match.params.id}`
//             fetch(baseUrl)
//             .then(res => res.json())
//             .then(property => {
//                 this.setState({
//                     property
//                 })
//             })