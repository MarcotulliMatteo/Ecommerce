import { useEffect, useState } from "react";
import { Cart, Product } from "../../Utils/types";
import './CartItem.css';
import { BASE_URL, CART_API, PRODUCT_API } from "../../Utils/endpoints";
import { MOCK_USER_ID } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../State";
import { bindActionCreators } from "redux";
import { fetchCartApi, removeCartApi } from "../../Utils/api/cartApi";
import { fetchProductById } from "../../Utils/api/productApi";

interface CartItemProps {
    cartItem: Cart;
}

const CartItem = ({cartItem}: CartItemProps) => {
    const [product, setProduct] = useState<Product>();

    const dispatch = useDispatch();

    const { fetchCart } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        const addDataToProduct = (product: Product) => setProduct(product);
        fetchProductById(cartItem.productID, addDataToProduct);
    }, [])

    const handleAddQuantity = () => {
        if(!product) return;
        fetchCartApi(product, 1, fetchCart);
    }

    const handleDecreaseQuantity = () => {
        if(!product) return;
        fetchCartApi(product, -1, fetchCart);
    }

    const handleRemoveProduct = () => {
        if(!product) return;
        removeCartApi(product, fetchCart);
    }

    return (
        <div>
            {   
                product &&
                <div className="cart-item-container">
                    <img src={product?.thumbnail} alt={product?.name}/>
                    <div>
                        <h2>{product?.name}</h2>
                        <h4>{`${product?.price} ${product?.currency}`}</h4>
                        <div className="quantity-container">
                            <div>{`Qty. ${cartItem.quantity}`}</div>
                            <div className="quantity-button-container">
                                <div className="quantity-button" onClick={handleAddQuantity}>+</div>
                                <div className="quantity-button" onClick={handleDecreaseQuantity}>-</div>
                            </div>
                        </div>
                        <p className="button-text" onClick={handleRemoveProduct}>Remove</p>
                    </div>
                </div>
            }
        </div>  
    )
}

export default CartItem;