import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/icons8-shopping-cart-80.png';

function CartWidget() {
  return (
    <div className="d-flex align-items-center position-relative">
      <img src={cart} alt="Carrito de compras" style={{ width: 24, height: 24 }} />
      <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">3</span>
    </div>
  );
}

export default CartWidget;
