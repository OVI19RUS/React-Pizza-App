const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload, // будет храниться массив
            isLoaded: true,
        }
    }
    return state
}

export default pizzasReducer