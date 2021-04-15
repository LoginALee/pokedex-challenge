import React, { useEffect, useState } from 'react'
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = (props) => {
  const { onAdd } = props;
  const [data, setData] = useState(null);
  const fetchURL = "https://pokeapi.co/api/v2/pokemon?limit=30";
  const imageURL = 'https://pokeres.bastionbot.org/images/pokemon';

  const getData = async () => await fetchPokemon()

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  async function fetchPokemon(){
    let pokemons = [];
    try{
      const response = await fetch(`${fetchURL}`)
      const json = await response.json();

      for (const item of json.results){
        let pokemon = await fetchPokemonData(item);
        pokemon.img = `${imageURL}/${pokemon.id}.png`;
        pokemons.push(pokemon);
      }

      return pokemons;
    }catch(error){
      throw new Error(error);
    }
  }

  async function fetchPokemonData(pokemon){
    let url = pokemon.url;
    try{
      const response = await fetch(url);
      const json = await response.json();
      return json;
    }catch(error){
      throw new Error(error);
    }
  }

    return (
      <div className="row mt-2">
          {data ? 
            (data.map((item) => 
              <PokemonCard 
                pokemon={item}
                 key={item.name} 
                 onAdd={onAdd}
               />
            )) : <div className="bg-warning text-center">Loading...</div> }
          </div>
     )
}

export default PokemonList;
