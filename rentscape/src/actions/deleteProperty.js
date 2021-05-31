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
