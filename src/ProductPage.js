import React from "react";
import Product from "./Product";


const ProductPage = (props)=>{
    const productList = props.products.map((pr,index)=>{
        return <Product title={pr} key={index} />
    });
    return (<div role="product-page">
   {productList}
    </div>);
}
export default ProductPage;