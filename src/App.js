import './App.css';
import React, { useState } from 'react'; 
import PokemonList from './components/PokemonList/PokemonList'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (pokemon) =>{
    const exist = cartItems.find(item => item.id === pokemon.id);
    if(exist){
      setCartItems(cartItems.map(item => item.id === pokemon.id ? {...exist, cuantity: exist.cuantity + 1} : item));
    }else{
      setCartItems([...cartItems, {...pokemon, cuantity: 1}]);
    }
  }

  const onRemove = (pokemon) =>{
    const exist = cartItems.find((item) => item.id === pokemon.id);
    if(exist.cuantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== pokemon.id));
    }else{
      setCartItems(
        cartItems.map((item) =>
          item.id === pokemon.id ? {...exist, cuantity: exist.cuantity - 1} : item
        )
      );
    }
  }

  return (
      <React.Fragment>
        <Header countCartItems={cartItems.length} /> 
        <div className="container">
          <div className="row">
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </div>
          <PokemonList onAdd={onAdd}/>
        </div>
      </React.Fragment>
  );
}

export default App;
