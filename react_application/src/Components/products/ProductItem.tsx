import { Cart, Product } from "../../Utils/types";
import './ProductItem.css';
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../State";
import { BASE_URL, CART_API } from "../../Utils/endpoints";
import { MOCK_USER_ID } from "../../Utils/constants";

const ProductItem = ({ product } : { product: Product }) => {

    const dispatch = useDispatch();
    const { fetchCart } = bindActionCreators(actionCreators, dispatch);

    const handleAddToCart = (product: Product) => {
        const cart: Cart = {
            productID: product.ID,
            userID: MOCK_USER_ID.toString(),
            quantity: 1,
            category: product.category,
            price: product.price,
            currency: product.currency
        }
        
        fetch(`${BASE_URL}${CART_API}${MOCK_USER_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        })
        .then(_ => {
            fetchCart();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="product-container">
            <img src={product.thumbnail} alt={product.name}></img>
            <div className="product-container-info">
                <div>
                    <div>{`${product.price} ${product.currency}`}</div>
                    <div>{product.name}</div>
                </div>
                <FaCartPlus size={24} style={{cursor: "pointer"}} onClick={() => handleAddToCart(product)}/>
            </div>
        </div>
    )
}

export default ProductItem;