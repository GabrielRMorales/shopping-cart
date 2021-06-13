import React from "react";

const ShoppingCart = (props)=>{
    return (<div role="shopping-cart" id="shopping-cart">
        <section id="project-brand">GAMECO</section><div role="total-items" id="total-items"><img src="./cart.svg" /><p id="total-item-number">{props.totalItems || 0}</p></div>
    </div>);
}

export default ShoppingCart;