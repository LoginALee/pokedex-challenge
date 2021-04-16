import React from 'react'

const CartItem = ({ item, onAdd, onRemove, totalPrice }) => {
  return(
    <div className="row">
      <div className="col-2">{item.name}</div>
      <div className="col-2">
        <button onClick={() => onAdd(item)} className="btn-success mr-2">+</button>
        <button onClick={() => onRemove(item)} className="btn-danger">-</button>
      </div>
      <div className="col-2 text-right">
        {item.quantity} x ${item.id.toFixed(2)}
      </div>
     <hr />
     <div className="row">
       <div className="col-2">Total price</div>
       <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
     </div>
     <hr />
    </div>
  )
}

export default CartItem;
