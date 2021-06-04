const properties = (state = { properties: [], sortedProperties: [], errors: [], loading: true }, action) => {
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
                sortedProperties: action.properties,
                loading: false
            }

        case 'SAVING_PROPERTY':
            return {
                ...state,
                properties: [...state.properties],
                loading: true
            }

        case 'ADD_PROPERTY':
                return {
                    ...state,
                    properties: [...state.properties, action.property],
                    errors: [],
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

        case 'DELETE_PROPERTY':
            return {
                ...state,
                sortedProperties: state.sortedProperties.filter(({ id }) => id !== action.id),
                loading: false
            }

        case 'UPDATE_SORTED':
            return {
                ...state,
                sortedProperties: action.sortedProperties
            }

        default:
            return state
    }
}

export default properties
