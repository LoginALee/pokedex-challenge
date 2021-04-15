import React from 'react';

const Order = (props) => { 
  const { order } = props;

  return (
    <div>
      {order.length === 0 ? <div>No orders yet</div> :  
        <div>
        <aside className="col">
          <h2>Items from order #{order.details.created}</h2>
          <div className="row">
            <div className="col">Person name: {order.details.card.name}</div>
            <div className="col">city: {order.details.card.address_city}</div>
            <div className="col">Person email: {order.details.email}</div>
            <div className="col">Person country: {order.details.card.country}</div>
          </div>
        </aside>
              {order.items.cartItems ?
                (order.items.cartItems.map((pokemon) =>
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
              <div className="col-1 text-right"><strong>${order.items.total.toFixed(2)}</strong></div>
            </div>
            </div>
          <hr/>
          </div>
      }
    </div>
  )
}

export default Order;
