const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload, // будет храниться массив
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload, // isLoaded меняется на true/false в зависимости от того, что в action pizzas
            };
        default:
            return state;
    }
}

export default pizzasReducer