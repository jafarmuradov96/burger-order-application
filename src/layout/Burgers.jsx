import React from 'react';
import '../layout/Burgers.css'
import BurgerList from '../burgers/BurgerList';

const Burgers = ({ name, price, handleAddCount, onSubmit, countOrderBurger }) => {
  return (
    <div className='burgers' id='burgerListId'>
      <h1>Burger List</h1>
      <BurgerList
        name={name}
        price={price}
        handleAddCount={handleAddCount}
        onSubmit={onSubmit}
        countOrderBurger ={countOrderBurger}
         />
    </div>
  )
}

export default Burgers