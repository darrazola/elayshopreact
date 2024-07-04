import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';

function NavBar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ElayShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa-deportiva">Ropa Deportiva</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa-hombres">Ropa para hombres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa-mujeres">Ropa para mujeres</Link>
            </li>
          </ul>
          <CartWidget />
          <span className="navbar-text ms-3">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> ({cartItems.length})
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
