import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

const PokemonCard = (props) => {
  const [open, setOpen] = useState(false);

    return (
        <div className="card mt-2" onClick={() => setOpen(!open)} aria-controls={"card-" + props.id} aria-expanded={open}>
          <img src={props.img} className="card-img-top"/>
            <div className="card-body" id={"card-" + props.name}>
              <h5 className="card-title">{props.name}</h5>
              <Collapse in={open}>
                <p className="card-text">
                  Height: {props.height}
                </p>
                <p className="card-text">
                  Weight: {props.weight}
                </p>
                <p className="card-text">
                  Price: ${props.id}
                </p>
              </Collapse>
            </div>
        </div>
     )
}

export default PokemonCard;
