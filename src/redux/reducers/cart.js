const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':{
            const newItems = {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id],
                        action.payload
                        ]
            };

            const allItemsInCart = [].concat.apply([], Object.values(newItems));
            const sumPrice = allItemsInCart.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                itemsCount: allItemsInCart.length,
                totalPrice: sumPrice,
            };}

        default:
            return state;
    }
}

export default cart