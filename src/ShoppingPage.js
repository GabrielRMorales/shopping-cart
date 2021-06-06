import React, {useState, useEffect} from "react";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";
import "./ShoppingPage.css";

const ShoppingPage = (props)=>{
    const [totalItems, setItems] = useState(0);
    const products = ["a","b","c","d"];
    return (<div role="shopping-page" id="shopping-page">
        <ShoppingCart totalItems = {totalItems} />
        <ProductPage products={products} click={(number)=>{setItems(totalItems + number)} }/>
    </div>)
}

export default ShoppingPage;