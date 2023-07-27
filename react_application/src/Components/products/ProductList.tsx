import './ProductList.css';
import { Product } from '../../Utils/types';
import ProductItem from './ProductItem';
import React from 'react';

interface ProductListPops {
    products: Product[];
    title: string;
}

const ProductList = ({products, title} : ProductListPops) => {
    return (
        <React.Fragment>
           {
                products.length > 0 &&
                <div>
                    <div className='product-list-title'>{title}</div>
                    <div className='product-list'>
                        {
                            products.map(product => {
                                return <ProductItem key={product.ID} product={product}/>
                            })
                        }
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default ProductList;