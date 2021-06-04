export const addProperties = properties => ({
    type: 'ADD_PROPERTIES',
    properties
})

export const fetchProperties = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROPERTIES' })
        fetch('http://localhost:4000/properties')
        .then(res => res.json())
        .then(properties => {
            dispatch({ type: 'ADD_PROPERTIES', properties})
        })
    }
}

export const deleteProperty = ({id, password}) => {
    return (dispatch => {
        let pObj = {id, password}
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(pObj)
        }
        dispatch({ type: 'DELETING_PROPERTY'})
        fetch(`http://localhost:4000/validate`, configObj)
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                dispatch({ type: 'FORM_ERRORS', formErrors: data.errors})
            } else {
                dispatch({ type: 'DELETE_PROPERTY', id})
            }
        })
    })
}

export const fetchProperty = id => {
    return (dispatch) => {
        dispatch({ type: 'SAVING_PROPERTY' })
        fetch(`http://localhost:4000/properties/${id}`)
        .then(res => res.json())
        .then(property => {
            dispatch({ type: 'ADD_PROPERTY', property })
        })
    }
}

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

export const resetErrors = () => ({
    type: 'RESET_ERRORS'
})

export const updateSortedProperties = sortedProperties => ({
    type: 'UPDATE_SORTED',
    sortedProperties: Array.from(sortedProperties)
})