import React, {useEffect} from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import {getOneProduct} from '../../redux/actions/productsActions'

const SelectedProduct = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        getOneProduct()(dispatch)
    },[])

    const product = useSelector((state)=> state.selectedProduct.products)
    const renderList = product.map((i)=> {
        const {id, title, image, category, description, price} = i 
        return (
            <div className="selectedProduct" key={id}>
                <div className="selectedProductImage"><img src={image} alt={title}/></div>
                <div className="selectedProductInfo">
                    <span>{title}</span>
                    {description}
                    {price}
                    {category}
                </div>
            </div>
        )
    })

    return (
        <>
          {renderList}  
        </>
    )
}

export default SelectedProduct