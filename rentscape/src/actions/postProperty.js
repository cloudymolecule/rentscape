export const postProperty = property => {
    return (dispatch) => {
        dispatch({ type: 'SAVING_PROPERTY' })
        fetch('http://localhost:4000/properties', {method: 'POST', body: property})
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                dispatch({ type: 'FORM_ERRORS', formErrors: data.errors})
            } else {
                dispatch({ type: 'ADD_PROPERTY', property})
            }
           
        })
    }
}