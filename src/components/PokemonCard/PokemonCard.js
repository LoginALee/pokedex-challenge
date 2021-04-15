import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

const PokemonCard = ({ pokemon, onAdd }) => {
  const [open, setOpen] = useState(false);
  const { id, name, height, weight, img } = pokemon;

  return (
    <div className="col-4" data-testid="show-data">
      <div className="card mt-2" onClick={() => setOpen(!open)} aria-controls={"card-" + id} aria-expanded={open}>
        <img src={img} className="card-img-top"/>
          <div className="card-body" id={"card-" + name}>
            <h5 className="card-title">{name}</h5>
              <Collapse in={open}>
               <div>
                 <p className="card-text">
                   Height: {height}
                 </p>
                 <p className="card-text">
                   Weight: {weight}
                 </p>
                 <p className="card-text">
                   Price: ${id}
                 </p>
                 <button data-testid={`add-cart-${id}`} onClick={() => onAdd(pokemon)} className="btn btn-primary">Add to cart</button>
              </div>
             </Collapse>
           </div>
       </div>
     </div>
   )
}

export default PokemonCard;
