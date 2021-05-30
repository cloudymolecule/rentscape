const properties = (state = { properties: [], loading: false }, action) => {
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
        default:
            return state
    }
}

export default properties