import React, {useState} from "react";

const Product = (props)=>{
    const [quantity, setQuantity] = useState(0);

    return (<div role="product" className="product">
        <p>{quantity}</p>
    <button role="increase" className="increase" onClick={()=>setQuantity(quantity+1)} >+</button>
    <button role="decrease" className="decrease" onClick={()=>{
        if (quantity>0){
            setQuantity(quantity-1);
        }
    }}>–</button>
    <button role="add-to-cart" onClick={()=>{
        props.onClick(quantity)
        setQuantity(0);
        }}><img src="./cart.svg" /><p>Add to Cart</p></button>
    </div>);
}

export default Product;