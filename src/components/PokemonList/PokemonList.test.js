import { render, screen, act } from '@testing-library/react';
import PokemonList from './PokemonList';
import PokemonCard from '../PokemonCard/PokemonCard'

let pokemons = [
 {
    img: "https://pokeres.bastionbot.org/images/pokemon/1.png",
    name: "bulbasaur",
    height: 7,
    weight: 69,
    id: 1
 }
]

it("renders PokemonList", () => {
  const { queryByTitle } = render(<PokemonList />);
  const row = queryByTitle('row');
  expect(row).toBeTruthy();
});


it("should display a loading text", () => {
  const { getByTestId } = render(<PokemonList />);
  expect(getByTestId('loading')).toHaveTextContent('Loading...');
})

it("should load and display the pokemons", async() => {
  await act(async () => render(<PokemonCard pokemon={pokemons[0]} />));
  expect(screen.getByText("bulbasaur")).toBeInTheDocument();
})
