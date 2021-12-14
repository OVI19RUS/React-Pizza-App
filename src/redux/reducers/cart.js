const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

// создаем функцию, которая заменит нам повторяющийся код - reduce, который проходит по нашему массиву, выбирает оттуда цену и, перебирая массив, складывает все цены в одно число
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

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

            const itemsCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                itemsCount,
                totalPrice
            };
        };

        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentItemsCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentItemsCount,
            };

        case 'CLEAR_CART':
            return {
                totalPrice: 0,
                itemsCount: 0,
                items: {}
            };

        case 'ADD_PIZZA': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const itemsCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                itemsCount,
                totalPrice,
            };
        }

        case 'REMOVE_PIZZA': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const itemsCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                itemsCount,
                totalPrice,
            };
        }

        default:
            return state;
    }
}

export default cart