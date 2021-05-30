export const fetchProperties = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROPERTIES' })
        fetch('http://localhost:4000/properties')
        .then(res => res.json())
        .then(properties => {
            console.log('we are fetching', properties)
            dispatch({ type: 'ADD_PROPERTIES', properties})
        })
    }
}
