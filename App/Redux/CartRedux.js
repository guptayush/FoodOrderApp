import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    addToCartRequest: ['dish'],
    removeFromCartRequest: ['dish']
})

export const CartTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    cartItems: {}
})


/* ------------- Reducers ------------- */

export const addToCart = (state, action) => {
    const { dish } = action
    let alreadyAdded = false
    if (state.cartItems.hasOwnProperty(dish.dish_id)) {
        alreadyAdded = true
    }

    return state.merge({
        cartItems: {
            ...state.cartItems,
            [dish.dish_id]: {
                ...dish,
                qty: alreadyAdded ? state.cartItems[dish.dish_id].qty + 1 : 1
            }
        }
    })
}

export const removeFromCart = (state, action) => {
    const { dish } = action
    let cartItems = state.cartItems
    if (state.cartItems.hasOwnProperty(dish.dish_id)) {
        delete cartItems[dish.dish_id]
    }

    return state.merge({
        cartItems
    })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_TO_CART_REQUEST]: addToCart,
    [Types.REMOVE_FROM_CART_REQUEST]: removeFromCart,
})
