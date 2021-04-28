import ACTION from '../constants/cart'

// const cartInLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
    cart: cartInLocalStorage || [],
    total: 0,
    quantity: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_ITEM:
            const itemAlreadyInCart = state.cart.find(item => item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart: itemAlreadyInCart ? state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item) : [...state.cart, {...action.payload, quantity: 1}]
            }
        
        case ACTION.INCREASE_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
            }
        
        case ACTION.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            }
        
        case ACTION.REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        case ACTION.GET_TOTAL:
            let {total, quantity} = state.cart.reduce((allTotal, item) => {
                const {current_price, quantity} = item
                const itemTotal = current_price * quantity
                allTotal.totalPrice += itemTotal
                allTotal.totalQuantity += quantity
                return allTotal
            }, {
                totalPrice: 0,
                totalQuantity: 0,
            })
            // total = parseFloat(total.toFixed(2))
            return {...state, total, quantity}
        
        case ACTION.CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }

}

export default cartReducer