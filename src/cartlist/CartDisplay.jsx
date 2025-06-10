import CartButton from "./CartButton";

const CartDisplay = ({ cart, setCart }) => {
  if (!cart) return (
    <>
      <h2>Cart</h2>
      <p>Your cart is empty.</p>
    </>
  )
  return (
    <section>
      <h2>Cart</h2>
      <aside>
        {cart.image} {cart.name}
        <CartButton setCart={setCart} />
      </aside>
    </section>
  )
}

export default CartDisplay;