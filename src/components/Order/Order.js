import React from 'react';

const Order = ({ order }) => { 
  const { details: { card : { country, address_city }, name, email, created } } = order;
  const { items: { cartItems, total } } = order; 

  return (
    <div>
      {order.length === 0 ? <div>No orders yet</div> :  
        <div>
        <aside className="col">
          <h2>Items from order #{created}</h2>
          <div className="row">
            <div className="col">Person name: {name}</div>
            <div className="col">city: {address_city}</div>
            <div className="col">Person email: {email}</div>
            <div className="col">Person country: {country}</div>
          </div>
        </aside>
              {cartItems ?
                (cartItems.map((pokemon) =>
                  <div key={pokemon.name} className="row">
                  <div className="col">Article: {pokemon.name}
                    <div className="col text-right">Price: ${pokemon.id}
                    </div>
                  </div>
                </div>
                )) : <div className="bg-warning text-center">Loading...</div>
              }
          <div>
            <hr></hr>
            <div className="row">
              <div className="col-2">Total price</div>
              <div className="col-1 text-right"><strong>${total.toFixed(2)}</strong></div>
            </div>
            </div>
          <hr/>
          </div>
      }
    </div>
  )
}

export default Order;
