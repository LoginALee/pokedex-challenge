import React from 'react';

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.id * c.cuantity, 0);

  return(
    <aside className="col align-self-end">
      <h2> Cart items</h2>
      <div>
        {!cartItems.length ? <div>Cart is empty</div> : '' }
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="btn-success mr-2">+</button>
            <button onClick={() => onRemove(item)} className="btn-danger">-</button>
          </div>
          <div className="col-2 text-right">
            {item.cuantity} x ${item.id.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length ?  (
        <div>
          <hr></hr>
          <div className="row">
            <div className="col-2">Total price</div>
            <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
          </div>
          <hr/>
          <div className="row">
            <button className="btn-primary col-2 text-center" onClick={() => alert('Checkout')}>Checkout</button>
          </div>
        </div>
      ) : ''}
    </aside>
  )
}

export default Cart;
