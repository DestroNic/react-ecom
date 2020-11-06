import React, { Component } from 'react';
import GreenPriceTag from '../greenPriceTag';
import Quantity from '../quantity';

class CartProduct extends Component {
    render() {
        const { className, title, quantity, price  } = this.props;
        return (
            <div className={'${className} cart-product'}>
                <img className='cart-product__image' src='http://via.placeholder.com/130x130' />
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity} />
                <div className='cart-product__remove'>Remove</div>
                <GreenPriceTag className='cart-product__price' price={price} />
            </div>
        )
    }
}

export default CartProduct;