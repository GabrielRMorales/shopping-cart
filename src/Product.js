import React, {useState} from "react";

const Product = (props)=>{
    const [quantity, setQuantity] = useState(0);

    return (<div role="product" className="product">
    <button role="increase" className="increase" onClick={()=>setQuantity(quantity+1)} >+</button>
    <p>{quantity}</p>
    <button role="decrease" className="decrease" onClick={()=>{
        if (quantity>0){
            setQuantity(quantity-1);
        }
    }}>-</button>
    <button role="add-to-cart" onClick={props.onClick(quantity)}>Add to Cart</button>
    </div>);
}

export default Product;