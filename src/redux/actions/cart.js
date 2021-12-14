export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})

export const addPizza = (id) => ({
    type: 'ADD_PIZZA',
    payload: id,
})

export const removePizza = (id) => ({
    type: 'REMOVE_PIZZA',
    payload: id,
})