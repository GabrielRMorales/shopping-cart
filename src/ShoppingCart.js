import React from "react";

const ShoppingCart = (props)=>{
    return (<div role="shopping-cart">
        <div role="total-items">{props.totalItems || 0}</div>
    </div>);
}

export default ShoppingCart;