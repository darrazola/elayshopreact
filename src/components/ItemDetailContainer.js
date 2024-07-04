import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mockFetchItemById } from '../mockApi';
import { CartContext } from './CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await mockFetchItemById(id);
      setItem(response);
    };

    fetchItem();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  if (!item) return <div>Cargando...</div>;

  return (
    <div className="container my-4 text-center">
      <h2 className="display-4">{item.name}</h2>
      <img src={`/images/${item.detail}`} alt={item.name} style={{ width: '50%', height: 'auto' }} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity} className="btn btn-secondary">-</button>
        <span className="quantity">{quantity}</span>
        <button onClick={increaseQuantity} className="btn btn-secondary">+</button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-success mt-3">Añadir al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
