import React from 'react';
import '../orders-cart/CartListItem.css';

const CartListItem = ({name,price,count, onRemove, onAdd}) => {
    
    const priceBurger = price.toFixed(2)
    return (
        <>
            <li className='cart-list'>
                <div className='cart-list-left'>
                    <h2>{name}</h2>
                    <div className='price-count'>
                        <span className='price'>{priceBurger}$</span>
                        <span className='count'>x{count}</span>
                    </div>
                </div>

                <div className='cart-list-right' >
                    <button onClick = {onRemove} >-</button>
                    <button onClick={onAdd}>+</button>
                </div>
            </li>
        </>
    )
}

export default CartListItem