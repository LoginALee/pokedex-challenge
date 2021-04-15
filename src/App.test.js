import { render, act, waitFor, screen, fireEvent } from '@testing-library/react';
import App from './App'


it('displays the pokemons', async() => {
  await act(async () => {
     render(<App/>);
  }); 
  await waitFor(() => screen.getByText('bulbasaur'), { timeout: 5000 });
  await waitFor(() => screen.getByText('pikachu'), { timeout: 5000 });
  await waitFor(() => screen.getByText('pidgey'), { timeout: 5000 });
})

it('Adds pokemons to the cart', async () => {
  await act(async () => render(<App />), { timeout: 5000 });
  const pokemon = await waitFor(() => screen.getByText('pidgey'), { timeout: 5000 });
  act(() => { fireEvent.click(pokemon)});
  const addBtn = screen.getByTestId('add-cart-16');
  act(() => { fireEvent.click(addBtn)});
  const counter = screen.getByTestId('cart-count');
  expect(counter).toHaveTextContent('1');
})
