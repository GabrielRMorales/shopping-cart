import React, {useState, useEffect} from "react";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";

const ShoppingPage = (props)=>{
    const [totalItems, setItems] = useState(0);
    const products = ["a","b","c","d"];
    return (<div role="shopping-page">
        <ShoppingCart totalItems = {totalItems} />;
        <ProductPage products={products} click={useEffect((number)=>{setItems(totalItems + number)}, [totalItems]) }/>;
    </div>)
}

export default ShoppingPage;