import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";

const ShoppingPage = (props)=>{
    const products = ["a","b","c","d"];
    return (<div role="shopping-page">
        <ShoppingCart />;
        <ProductPage products={products} />;
    </div>)
}

export default ShoppingPage;