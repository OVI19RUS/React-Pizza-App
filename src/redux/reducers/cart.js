const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

// создаем функцию, которая заменит нам повторяющийся код - reduce, который проходит по нашему массиву, выбирает оттуда цену и, перебирая массив, складывает все цены в одно число
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            // создаем переменную, которая просчитывает изменение состояния; генерируем новый массив
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items,
                action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    // создаем объект, где создаем свойство items равно переменной изменения состояния
                    items: currentItems,
                    // это свойство отвечает за цену, и мы ее получаем с помощью функции
                    totalPrice: getTotalPrice(currentItems),
                }
            };

            const allItemsInCart = [].concat.apply([], Object.values(newItems).map(obj => obj.items));
            const sumPrice = getTotalPrice(allItemsInCart)

            return {
                ...state,
                items: newItems,
                itemsCount: allItemsInCart.length,
                totalPrice: sumPrice,
            };
        }

        case 'CLEAR_CART':
            return {
                totalPrice: 0,
                itemsCount: 0,
                items: {}
            }

        default:
            return state;
    }
}

export default cart