import {ActionTypes} from '../constants/actionTypes'
import axios from 'axios'
 
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

    export const selectedProduct = (product) => {
        return {
            type : ActionTypes.SELECTED_PRODUCT,
            payload : product
        }
    }

export const removeSelectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const getProducts = () => async(dispatch) => {
    await axios
    .get("https://fakestoreapi.com/products")
    .then((response)=> 
        dispatch({
            type : ActionTypes.SET_PRODUCTS,
            payload : response.data
        })
    ).catch((error)=>{
       console.log(">> Error :", error);
        dispatch({
            type : "GET_ALL_PRODUCTS_ERROR",
            payload : error
        })
        
    })
}

export const getOneProduct = () => async(dispatch) => {
    await axios
    .get("https://fakestoreapi.com/products/1")
    .then((response)=> 
        dispatch({
            type : ActionTypes.SELECTED_PRODUCT,
            payload : response.data
        })
    ).catch((error)=>{
       console.log(">> Error :", error);
        dispatch({
            type : "GET_SELECTED_PRODUCT_ERROR",
            payload : error
        })
        
    })
}