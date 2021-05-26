const properties = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROPERTY':
            // return [...state, action.property]
            return [...state, action.property]
            // properties: action.property
        default:
            return state
    }
}

export default properties