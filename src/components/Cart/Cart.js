import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from '../CartItem/CartItem'

toast.configure();

const Cart = ({
  cartItems,
  onAdd,
  onRemove,
  onClean,
  onCreateOrder
}) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.id * c.quantity, 0);

  const handleToken = (token) => {
    toast("Success! Your pokemons are on their way", { type: "success" });
    let Order = {
      details: token,
      items: { cartItems, total: totalPrice }
    }
    onCreateOrder(Order);
    onClean();
  }

  return(
    <aside className="col align-self-end">
      <h2>Cart items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
      </div>
      {cartItems.length !== 0 && (cartItems.map((item) => 
        <CartItem
          key={item.name}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
          totalPrice={totalPrice}
         />))}
      {cartItems.length !== 0 && (
        <div className="row">
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name="Pokemons"
          />
          <ToastContainer />
        </div>
      )}
    </aside>
    )
}

export default Cart;

