import { Cart, Product } from "../../Utils/types";
import { ActionType } from "../action-types";

interface FetchProductsAction {
    type: ActionType.FETCH_PRODUCTS,
    payload: Product[];
}

interface FetchRaccomandationsAction {
    type: ActionType.FETCH_RACCOMANDATIONS,
    payload: Product[];
}

interface FetchCartAction {
    type: ActionType.FETCH_CART,
    payload: Cart[];
}

export type Action = FetchProductsAction | FetchRaccomandationsAction | FetchCartAction;