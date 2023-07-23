import React from 'react';
import { Link } from 'react-scroll';

const OrderNowButton = () => {
  return (
    <>
      <Link to="burgerListId"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button>Order Now</button>
      </Link>
    </>

  )
}

export default OrderNowButton