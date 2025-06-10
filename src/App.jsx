import { useState } from 'react';
import PlantList from './fulllist/PlantList.jsx';
import CartDisplay from './cartlist/CartDisplay.jsx';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <h1>Proper Plants</h1>
      <PlantList plant={cart} setPlant={setCart} />
      <CartDisplay cart={cart} setCart={setCart} />
    </>
  )
}

export default App;