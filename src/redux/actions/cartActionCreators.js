import ACTION from '../constants/cart'

export const addProductToCart = (item) => (dispatch, getState) => {
    dispatch({type: ACTION.ADD_ITEM, payload: item})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const removeProductFromCart = (id) => (dispatch, getState) => {
    dispatch({type: ACTION.REMOVE_ITEM, payload: id})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const increaseItemQuantity = (id) => (dispatch, getState) => {
    dispatch({type: ACTION.INCREASE_ITEM_QUANTITY, payload: id})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const decreaseItemQuantity = (id) => (dispatch, getState) => {
    dispatch({type: ACTION.DECREASE_ITEM_QUANTITY, payload: id})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const getTotals = () => (dispatch, getState) => {
    dispatch({type: ACTION.GET_TOTAL})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const clearCart = () => (dispatch, getState) => {
    dispatch({type: ACTION.CLEAR_CART})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}