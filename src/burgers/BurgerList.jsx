import React from 'react';
import '../burgers/BurgerList.css';
import BurgerItem from './BurgerItem';

const DUMMY_BURGERS = [
    {
        id: 1,
        name: 'Hamburger',
        description: '100% ground beef patty, mustard, ketchup, onion and pickle slices between a caramelized bun.',
        price: 10.00
    },
    {
        id: 2,
        name: 'Cheeseburger',
        description: 'A 100% ground beef patty sandwiched between a caramelized bun, a slice of cheddar cheese, mustard, ketchup, onion and pickle slices.',
        price: 11.00
    },
    {
        id: 3,
        name: 'Chicken Burger',
        description: 'A deep fried chicken cutlet seasoned with fresh lettuce and special McChicken® sauce and served on a caramel bun.',
        price: 12.00
    },
    {
        id: 4,
        name: 'Big Mac',
        description: 'Two 100% ground beef patties, onions, two slices of pickles, 1 slice of cheddar cheese, iceberg lettuce and special Big Mac™ sauce on a sesame seed bun.',
        price: 18.00
    }
]


const BurgerList = ({onSubmit }) => {
    return (
        <div>
            <ul className='burger-list'>
                {DUMMY_BURGERS.map((item, index) => (
                    <BurgerItem
                        key={index}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        onSubmit={onSubmit} 
                        />
                ))}
            </ul>
        </div>
    )
}

export default BurgerList