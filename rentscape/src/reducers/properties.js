const properties = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROPERTY':
            return [...state, action.property]
        default:
            return state
    }
}

export default properties
