import { ActionType } from "../action-types";
import { Dispatch } from 'redux';
import { Action } from "../actions/action";
import { BASE_URL, CART_API, PRODUCT_API, PRODUCT_SEARCH_API, RACCOMANDATION_API } from "../../Utils/endpoints";
import { MOCK_USER_ID } from "../../Utils/constants";

export const fetchProducts = (text?: string) => {
    const URL = text ? `${BASE_URL}${PRODUCT_SEARCH_API}${text}` : `${BASE_URL}${PRODUCT_API}`
    return (dispatch : Dispatch<Action>) => {
        fetch(URL)
        .then(res => res.json())
        .then(products => {
            dispatch({
                type: ActionType.FETCH_PRODUCTS,
                payload: products.results
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const fetchRaccomandations = () => {
    return (dispatch : Dispatch<Action>) => {
        fetch(`${BASE_URL}${RACCOMANDATION_API}${MOCK_USER_ID}`)
        .then(res => res.json())
        .then(products => {
            dispatch({
                type: ActionType.FETCH_RACCOMANDATIONS,
                payload: products.results
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const fetchCart = () => {
    return (dispatch : Dispatch<Action>) => {
        fetch(`${BASE_URL}${CART_API}${MOCK_USER_ID}`)
        .then(res => res.json())
        .then(products => {
            dispatch({
                type: ActionType.FETCH_CART,
                payload: products.results
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}