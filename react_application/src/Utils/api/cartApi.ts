import { MOCK_USER_ID } from "../constants";
import { BASE_URL, CART_API } from "../endpoints";
import { Cart, Product } from "../types";

export const fetchCartApi = (product: Product, quantity: number, callback: () => void) => {
    if(!product) return;
    const cart: Cart = {
        productID: product.ID,
        userID: MOCK_USER_ID.toString(),
        quantity: quantity,
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
        callback();
    })
    .catch(error => {
        console.log(error);
    })
}

export const removeCartApi = (product: Product, callback: () => void) => {
    if(!product) return;
    
    fetch(`${BASE_URL}${CART_API}${MOCK_USER_ID}/${product.ID}`, {
        method: 'DELETE'
    })
    .then(_ => {
        callback();
    })
    .catch(error => {
        console.log(error);
    })
}