import ACTION from '../constants/products'
import axios from 'axios'

const url = "http://localhost:5000/products"

export const getAllProducts = () => async(dispatch) => {
    try {
        dispatch({type: ACTION.GET_ALL_PRODUCTS_LOADING})
    
        const {data} = await axios.get(url)
        dispatch({type: ACTION.GET_ALL_PRODUCTS_SUCCESS, payload: data})   
    } catch (error) {
        dispatch({type: ACTION.GET_ALL_PRODUCTS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})   
    }
}

export const getSingleProduct = (id) => async(dispatch) => {
    try {
        dispatch({type: ACTION.GET_SINGLE_PRODUCT_LOADING})

        const {data} = await axios.get(`/products/${id}`)
        dispatch({type: ACTION.GET_ALL_PRODUCTS_SUCCESS, payload: data})   
    } catch (error) {
        dispatch({type: ACTION.GET_ALL_PRODUCTS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})   
    }
}

export const removeProductDetail = () => (dispatch) => {
    dispatch({type: ACTION.GET_SINGLE_PRODUCT_RESET})
}