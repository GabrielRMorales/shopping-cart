import React from "react";
import Product from "./Product";


const ProductPage = (props)=>{
    const productList = props.products.map((pr,index)=>{
        return <Product title={pr} key={index} onClick={props.click} />
    });
    return (<div role="product-page" id="product-page"> 
   {productList}
    </div>);
}
export default ProductPage;