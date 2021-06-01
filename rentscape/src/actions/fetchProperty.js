export const fetchProperty = id => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROPERTY' })
        fetch(`http://localhost:4000/properties/${id}`)
        .then(res => res.json())
        .then(property => {
            dispatch({ type: 'ADD_PROPERTY', property })
        })
    }
}
