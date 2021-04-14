import './App.css';
import React from 'react'; 
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  return (
      <React.Fragment>
        <div className="container">
          <PokemonList/>
        </div>
      </React.Fragment>
  );
}

export default App;
