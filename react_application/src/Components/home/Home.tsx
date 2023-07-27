import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../State/reducers';
import { useEffect } from 'react';
import { actionCreators } from '../../State';
import ProductList from '../products/ProductList';

const Home = () => {
    const dispatch = useDispatch();
    const { fetchProducts, fetchRaccomandations, fetchCart } = bindActionCreators(actionCreators, dispatch)

    const stateProducts = useSelector((state: State) => state.productReducer);
    
    useEffect(() => {
        fetchProducts();
        fetchRaccomandations();
        fetchCart();
    }, [])
    
    return (
        <div className='home'>
            <ProductList products={stateProducts.products} title={'Products'}/>
            <ProductList products={stateProducts.raccomandationProducts} title={'Reccomanded Products'}/>
        </div>
    )
}

export default Home;