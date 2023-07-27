import { Cart, Product } from "../../Utils/types";
import { ActionType } from "../action-types";
import { Action } from "../actions/action";

type InitialState = {
    searchText : string;
    products: Product[];
    raccomandationProducts: Product[];
    cart: Cart[];
}

const initialState: InitialState = {
    searchText: '',
    products: [],
    raccomandationProducts: [],
    cart: []
}

const reducer = (state: InitialState = initialState, action : Action) => {
    switch (action.type) {
        case ActionType.FETCH_PRODUCTS: {
            return {...state, products: action.payload};
        }
        case ActionType.FETCH_RACCOMANDATIONS: {
            return {...state, raccomandationProducts: action.payload};
        }
        case ActionType.FETCH_CART: {
            return {...state, cart: action.payload};
        }
        default : {
            return state;
        }
    }
}

export default reducer;