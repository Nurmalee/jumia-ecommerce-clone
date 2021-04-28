import ACTION from '../constants/products'

export const productsReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case ACTION.GET_ALL_PRODUCTS_LOADING:
            return {
                loading: true,
                products: []
            }

        case ACTION.GET_ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }

        case ACTION.GET_ALL_PRODUCTS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export const singleProduct = (state = {product: {}}, action) => {
    switch (action.type) {
        case ACTION.GET_SINGLE_PRODUCT_LOADING:
            return {
                loading: true,
            }

        case ACTION.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case ACTION.GET_SINGLE_PRODUCT_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        
        case ACTION.GET_SINGLE_PRODUCT_RESET:
            return {
                product: {}
            }
    
        default:
            return state;
    }
}