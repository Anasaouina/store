import { useDispatch, useSelector } from "react-redux";

import { useEffect,useState } from 'react';
import { clear, removeFromCart } from "../rtk/slices/cart-slice";
import './Cart.css'

function Cart(props) {
    const { toggleCartVisibility } = props;
    const cart = useSelector((state) => state.cart);
    
    
    const dipatch = useDispatch();
    const totalePrice = cart.reduce((acc,product) => {
        acc += product.prix * product.quantity   ;
        return acc;
    },0)
    return (
       
        <div className="cartTab">
            <h2>Your Shopping Card </h2>
            <div className="cartList">
                    
                {
                    cart.length === 0 ? 'No items in the shopping card!' :<div className="item">
                        
                        <div className="image">
                             <span>image</span>
                        </div>
                        <div className="name">nome de produit</div>
                        <div className="totalPrice">prix</div>
                        <div className="quantity">Quantite</div>
                    </div> && cart.map((product) => {
                        return(
                            <div className="item" key={product.id}>
                        
                                <div className="image">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="totalPrice">{product.prix} DH</div>
                                <div className="quantity">{product.quantity}   <i class="fa-solid fa-trash"  onClick={()=>dipatch(removeFromCart({id:product.id}))}></i></div>
                                
                            </div>
                        )
                    })
                }
                {cart.length > 0 && <span> Le prix total est : {totalePrice.toFixed(2)} DH </span>}
            </div>
            <div className="cartBtn">
                <button className="close" onClick={toggleCartVisibility}>Close Cart</button>
                <button className="next">Next</button>
            </div>
        </div>
    )
}
export default Cart;