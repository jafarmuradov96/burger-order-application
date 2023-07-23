import React, { useState } from 'react';
import '../components/HeaderOrderButton.css';
import { FaShoppingCart } from 'react-icons/fa';


const HeaderOrderButton = ({onClick, countOrder}) => {

  return (
    <button className='header-btn' onClick={onClick}>
        <FaShoppingCart style={{marginRight:'10px', color: 'red', width: '35px' }}/>
        <span className='header-btn-name'>Your Orders</span>
        <span className='header-btn-count'>{countOrder}</span>
    </button>
  )
}

export default HeaderOrderButton