import React, {useState,useEffect} from 'react'
import ProductCard from '../productCard/productCard'
import {getOneProduct, getProducts} from '../../redux/actions/productsActions'
import { useDispatch} from 'react-redux'

const ProductList = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        getProducts()(dispatch)
        getOneProduct()(dispatch)
    },[])
   
    return (
        <div className="productList">
            <h1>Product List</h1>
            <ProductCard />
        </div>
    )
}

export default ProductList