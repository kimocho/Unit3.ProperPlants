import { useState } from 'react';

const CartButton = ({ cart, setCart, eachCartItem }) => {
  const [count, setCount] = useState(1);
  if (count < 1) setCart(cart.filter(item => item.id !== eachCartItem.id));
  return (
    <>
      <button className='decrement' onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button className='increment' onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default CartButton;