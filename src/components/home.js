import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { mockFetchAllItems } from '../mockApi';
import { CartContext } from './CartContext';

function Home() {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await mockFetchAllItems();
      setItems(response);
      const initialQuantities = response.reduce((acc, item) => {
        acc[item.id] = 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    };

    fetchItems();
  }, []);

  const increaseQuantity = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
    }));
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.id] });
  };

  return (
    <div className="container my-4 text-center">
      <h2 className="display-4">Encuentra lo mejor en ElayShop</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-4 mb-4" key={item.id}>
            <div className="card">
              <img src={`/images/${item.catalog}`} className="card-img-top" alt={item.name} style={{ width: '100%', height: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Stock disponible: {item.stock}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)} className="btn btn-secondary">-</button>
                  <span className="quantity">{quantities[item.id]}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="btn btn-secondary">+</button>
                </div>
                <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle del producto</Link>
                <button onClick={() => handleAddToCart(item)} className="btn btn-success mt-2">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
