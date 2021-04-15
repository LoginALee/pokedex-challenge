import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {countCartItems} = props;
  const navStyle = { color: 'white' };

  return(
    <nav>
      <Link style={navStyle} to='/'>
        <h1>Home</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/cart'>
          <li> Cart{' '}
            {countCartItems ? (
              <button className="badge badge-success badge-pill">{countCartItems}</button>
            ) : ('')} 
          </li>
        </Link>
        <Link style={navStyle} to='/orders'>
          <li>Order</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
