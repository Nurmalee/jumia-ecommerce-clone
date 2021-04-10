import ACTION from "./actions"

const cartReducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_ITEM:
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }

        case ACTION.REMOVE_ITEM:
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
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