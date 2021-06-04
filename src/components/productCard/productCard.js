import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.css'
 
const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((i)=> {
        const {id, title, image, category, price} = i 
        return (
            <Link to="/selectedProduct">
                <div className="card" style={{width: "18rem"}} key={id}>
                    <div className="container">
                        <img src={image} className="card-img-top" alt={title} /> 
                    </div>
                
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <p href="#" className="card-text">{category}</p>
                    </div>
                </div>
            </Link>
             
        ) 
    })
    return (
        <div className="productCard">
           {renderList}
        </div>
    )
}

export default ProductCard