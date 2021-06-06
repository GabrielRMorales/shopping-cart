import React, {useState} from "react";

const Product = (props)=>{
    const [quantity, setQuantity] = useState(0);

    return (<div role="product" className="product">
        <img src="" className="product-img" />
        <h1 className="product-title"></h1>
        <p className="product-description"></p>
        <input type="number" role="product-quantity" value={quantity} onChange={(e)=>{
            setQuantity(e.target.value);
        }}/>
        <section role="controls" className="controls">
    <button role="increase" className="increase" onClick={()=>setQuantity(quantity+1)} >+</button>
    <button role="decrease" className="decrease" onClick={()=>{
        if (quantity>0){
            setQuantity(quantity-1);
        }
    }}>–</button>
    <button role="add-to-cart" className="add-to-cart" onClick={()=>{
        props.onClick(quantity)
        setQuantity(0);
        }}><img src="./cart.svg" /><p>Add to Cart</p></button>
        </section>
    </div>);
}

export default Product;