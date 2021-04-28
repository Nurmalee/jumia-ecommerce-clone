import {combineReducers} from 'redux'
import cart from './cart'
import {singleProduct, productsReducer as products} from './products'

const reducer = combineReducers({
    cart,
    singleProduct,
    products,
})

export default reducer