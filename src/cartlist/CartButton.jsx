import { useState } from 'react';

const CartButton = ({ setCart }) => {
  const [count, setCount] = useState(1);
  if (!count) setCart('');
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default CartButton;