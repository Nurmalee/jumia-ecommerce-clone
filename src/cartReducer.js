import ACTION from "./actions"

const cartReducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_ITEM:

        const itemAlreadyInCart = state.cart.find(item => item.id === action.payload.id ? true : false)

        return {
            ...state,
            cart: itemAlreadyInCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...action.payload, qty: 1}]
        }

        case ACTION.REMOVE_ITEM:
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }

        case ACTION.UPDATE_ITEM_QAUNTITY:
        return {
            ...state,
            cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
        }

        case ACTION.CLEAR_CART:
        return {
            ...state,
            cart: []
        }
        
        default: 
        return state
    }
}

export default cartReducer