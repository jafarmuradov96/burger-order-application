import React, { useState } from 'react'
import HeaderOrderButton from '../components/HeaderOrderButton';
import bgImg from '../img/burger.jpg';
import '../layout/Header.css';
import OrderNowButton from '../components/OrderNowButton';
import Modal from '../UI/Modal';
import CartListItem from '../orders-cart/CartListItem';

const Header = ({ orderList, countOrder, totalAmount, onAdd, onRemove }) => {
    const [openIsModal, setOpenIsModal] = useState(false);

    const total = totalAmount.toFixed(2)

    const listLength = orderList.length;


    return (
        <>
            <header>
                <div className='header'>
                    <h2>My Burgers</h2>
                    <HeaderOrderButton onClick={() => setOpenIsModal(true)} countOrder={countOrder} />
                </div>

            </header>
            <div className='bg-image'>
                <img src={bgImg} alt="Background image" />
                <OrderNowButton />
            </div>
            <>
                <Modal openIsModal={openIsModal} >
                    <div className='orders-cart'>
                        <ul className='orders-cart-list'>
                            {orderList.map((item, index) => (
                                <CartListItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    count={item.count}
                                    id={item.id}
                                    onAdd ={onAdd}
                                    onRemove ={onRemove}
                                    />
                            ))}
                        </ul>

                        <div className='orders-cart-bottom'>
                            <div className='orders-total'>
                                <h3>Total Amount</h3>
                                <p>{total}$</p>
                            </div>
                            <div className='orders-btns'>
                                <button onClick={() => setOpenIsModal(false)} >Close</button>
                                {listLength > 0 ? <button>Order</button> : ''}
                            </div>

                        </div>
                    </div>
                </Modal>

            </>
        </>
    )
}

export default Header