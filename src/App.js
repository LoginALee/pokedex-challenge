import './App.css';
import React, { useState } from 'react'; 
import PokemonList from './components/PokemonList/PokemonList'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Order from './components/Order/Order'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [ cartItems, setCartItems ] = useState([]);
  const [ order, setOrder ] = useState([]);

  const onAdd = (pokemon) =>{
    const exist = cartItems.find(item => item.id === pokemon.id);
    if(exist){
      setCartItems(cartItems.map(item => item.id === pokemon.id ? {...exist, quantity: exist.quantity + 1} : item));
    }else{
      setCartItems([...cartItems, {...pokemon, quantity: 1}]);
    }
  }

  const onRemove = (pokemon) =>{
    const exist = cartItems.find((item) => item.id === pokemon.id);
    if(exist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== pokemon.id));
    }else{
      setCartItems(
        cartItems.map((item) =>
          item.id === pokemon.id ? {...exist, quantity: exist.quantity - 1} : item
        )
      );
    }
  }

  const onClean = () => {
    setCartItems([]);
  }

  const onCreateOrder = (order) => {
    setOrder(order);
  }

  return (
    <Router>
        <Header
          countCartItems={cartItems.length}
        /> 
       <div className="container">
          <Switch>
             <Route path="/cart" render={() =>
               <Cart
                 cartItems={cartItems}
                 onAdd={onAdd}
                 onRemove={onRemove}
                 onClean={onClean}
                 onCreateOrder={onCreateOrder}
               />
             }/>
             <Route path="/orders" render={() => 
                 <Order
                   order={order}
                 />
             }/>
             <Route path="/" exact render={() =>
               <PokemonList
                 onAdd={onAdd}
               />
             }/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
