import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from './App'

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

it('should render the home page', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  const navbar = getByTestId('navbar')
  const home = getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home')
  expect(navbar).toContainElement(home)
})


it('should render the cart page', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  const navbar = getByTestId('navbar')
  const cart = getByTestId('cart-link')

  expect(container.innerHTML).toMatch('Cart')
  expect(navbar).toContainElement(cart)
})

it('should render the Orders page', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  const navbar = getByTestId('navbar')
  const orders = getByTestId('orders-link')

  expect(container.innerHTML).toMatch('Order')
  expect(navbar).toContainElement(orders)
})
