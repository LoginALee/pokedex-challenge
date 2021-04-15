import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {countCartItems} = props;
  const navStyle = { color: 'white' };

  return(
    <nav data-testid="navbar">
      <Link data-testid="home-link" style={navStyle} to='/'>
        <h1>Home</h1>
      </Link>
      <ul className="nav-links">
        <Link data-testid="cart-link" style={navStyle} to='/cart'>
          <li> Cart{' '}
            {countCartItems ? (
              <button data-testid="cart-count" className="badge badge-success badge-pill">{countCartItems}</button>
            ) : ('')} 
          </li>
        </Link>
        <Link data-testid="orders-link" style={navStyle} to='/orders'>
          <li>Order</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
