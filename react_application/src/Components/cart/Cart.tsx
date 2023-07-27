import { useSelector } from "react-redux";
import { State } from "../../State/reducers";
import CartItem from "./CartItem";
import './Cart.css';
import { useEffect, useState } from "react";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const state = useSelector((state: State) => state.productReducer);

    useEffect(() => {
        const currentTotQuantity = state.cart.reduce((acc, val) => acc + val.quantity, 0);
        const currentTotPrice = state.cart.reduce((acc, val) => acc + (val.price * val.quantity), 0);
        Promise.all([
            setTotalPrice(currentTotPrice),
            setTotalQuantity(currentTotQuantity)
        ]);        
    }, [state.cart])
    
    return (
        <div className="cart">
            
            <div className="cart-product-container">
                <div className="title-container">
                    <h2>Cart</h2>
                </div>
                
                {
                    state.cart.map(elem => {
                        return (
                            <CartItem key={elem.productID} cartItem={elem}/>
                        )
                    })
                }

                <div className="total-price-container">
                    <h3>{`Temporary total (${totalQuantity} products): ${totalPrice} EUR`}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cart;