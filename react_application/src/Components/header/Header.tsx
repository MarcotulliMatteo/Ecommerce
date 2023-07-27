import React, { useEffect, useState } from "react";
import './Header.css';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../State";
import { State } from "../../State/reducers";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ()=> {
    const [inputText, setInputText] = useState('');
    const [productInCart, setProductInCart] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    
    const dispatch = useDispatch();

    const state = useSelector((state: State) => state.productReducer);

    const { fetchProducts } = bindActionCreators(actionCreators, dispatch);

    const onTextSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleSearch = () => {
        fetchProducts(inputText);
    }

    useEffect(() => {
        const cartCount = state.cart.reduce((acc, val) => acc += val.quantity, 0);
        setProductInCart(cartCount);
    }, [state.cart])

    const handleNavigationToCart = () => {
        navigate('/cart');
    }

    const handleNavigationToHome = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <div className="section-title-container">
                <h2 className="section-title" onClick={handleNavigationToHome}>E-Commerce</h2>
            </div>
            {
                location.pathname === '/' && 
                <div className="search-container">
                    <input className="input-search" value={inputText} onChange={(e) => onTextSearchChange(e)}/>
                    <IoIosSearch style={{cursor: 'pointer'}} size={24} onClick={handleSearch}/>
                </div>
            }
            <div className="cart-button-container">
                <div className="cart-button" onClick={handleNavigationToCart}>
                    <FaCartShopping size={24}/>
                    <div>Cart</div>
                    {
                        productInCart !== 0 && <div className="cart-count">{productInCart}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;