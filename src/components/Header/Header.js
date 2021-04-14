import React from 'react'

const Header = (props) => {
  const {countCartItems} = props;
  return(
    <nav className="App header center">
      <div>
        <a href='#'>
          <h1>Home</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {countCartItems ? (
            <button className="badge badge-success badge-pill">{countCartItems}</button>
          ) : ('')} 
        </a>
      </div>
    </nav>
  );
}

export default Header;
