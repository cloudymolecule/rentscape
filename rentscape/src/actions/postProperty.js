export const postProperty = property => {
    return (dispatch) => {
        dispatch({ type: 'SAVING_PROPERTY' })
        fetch('http://localhost:4000/properties', {method: 'POST', body: property})
        .then(res => res.json())
        .then(data => {
            console.log('we just added a property')
            dispatch({ type: 'ADD_PROPERTY', property})
        })
    }
}