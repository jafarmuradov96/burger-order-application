import React from 'react';
import '../layout/Burgers.css'
import BurgerList from '../burgers/BurgerList';

const Burgers = ({ name, price, onSubmit }) => {
  return (
    <div className='burgers' id='burgerListId'>
      <h1>Burger List</h1>
      <BurgerList
        name={name}
        price={price}
        onSubmit={onSubmit}
         />
    </div>
  )
}

export default Burgers