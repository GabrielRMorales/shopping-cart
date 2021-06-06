import React from "react";

const ShoppingCart = (props)=>{
    return (<div role="shopping-cart" id="shopping-cart">
        <div role="total-items"><img src="./cart.svg" /><p>{props.totalItems || 0}</p></div>
    </div>);
}

export default ShoppingCart;