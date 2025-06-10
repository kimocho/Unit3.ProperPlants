import CartButton from "./CartButton";

const CartDisplay = ({ cart, setCart }) => {
  if (cart.length < 1) return (
    <>
      <h2>Cart</h2>
      <p>Your cart is empty.</p>
    </>
  )
  return (
    <section>
      <h2>Cart</h2>
      <aside>
        {cart.map((eachCartItem) => (
          <>
            <p>{eachCartItem.image}</p>
            <p>{eachCartItem.name}</p>
            <CartButton cart={cart} setCart={setCart} eachCartItem={eachCartItem} />
          </>
        ))}

      </aside>
    </section>
  )
}

export default CartDisplay;