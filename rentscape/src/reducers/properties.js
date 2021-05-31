const properties = (state = { properties: [], errors: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_PROPERTIES':
            return {
                ...state,
                properties: [...state.properties],
                loading: true
            }
        
        case 'ADD_PROPERTIES':
            return {
                ...state,
                properties: action.properties,
                loading: false
            }
        
        case 'FORM_ERRORS':
            return {
                ...state,
                errors: action.formErrors,
                loading: false
            }

        case 'RESET_ERRORS':
            return {
                ...state,
                errors: [],
                loading: false
            }

        case 'SAVING_PROPERTY':
            return {
                ...state,
                loading: true
            }
        
        case 'ADD_PROPERTY':
            return {
                ...state,
                errors: [],
                loading: false
            }

        case 'DELETING_PROPERTY':
            return {
                ...state,
                loading: true
            }
        
        case 'DELETE_PROPERTY':
            return state

        default:
            return state
    }
}

export default properties
