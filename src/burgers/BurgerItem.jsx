import { useState } from 'react';
import '../burgers/BurgerItem.css';
import BurgerItemForm from './BurgerItemForm';


const BurgerItem = ({ name, id, description, price, onSubmit  }) => {
    const [countOrderBurger, setCountOrderBurger] = useState(1);

    const priceBurger = price.toFixed(2)


    const handleSubmitBurger = (e) => {
        e.preventDefault();

        // console.log(name, price, countOrderBurger, id);
        onSubmit(name, price, countOrderBurger,id)
    }

    return (
        <li className='burger-item'>
            <div className='burger-item-left'>
                <h2>{name}</h2>
                <p className='description'>{description}</p>
                <p className='price'>{priceBurger}$</p>
            </div>
            <div className='burger-item-right'>
                <BurgerItemForm
                    onSubmit={handleSubmitBurger}
                    value={countOrderBurger}
                    onChange={(e) => setCountOrderBurger(e.target.value)}
                />
            </div>

        </li>
    )
}

export default BurgerItem


//value={countOrderBurger} onChange={(e)=> setCountOrderBurger(e.target.value)}
//const [countOrderBurger, setCountOrderBurger]  = useState(1);
//