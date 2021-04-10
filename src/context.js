import {createContext, useContext, useReducer} from 'react'
import cartReducer from './cartReducer'
import ACTION from "./actions"

const appContext = createContext()

export const useAppContext = () => {
    return useContext(appContext)
}

export const AppState = ({children}) => {

    const initialState = {
        cart: []
    }
    
    const [state, dispatch] = useReducer(cartReducer, initialState)

    function addItem(newProduct){
        dispatch({type: ACTION.ADD_ITEM, payload: newProduct})
    }

    function removeItem(productID){
        dispatch({type: ACTION.REMOVE_ITEM, payload: productID})
    }

    function clearCart(){
        dispatch({type: ACTION.CLEAR_CART})
    }

    return (
        <appContext.Provider value={{cart: state.cart, addItem, removeItem, clearCart}}>
            {children}
        </appContext.Provider>
    )
}
