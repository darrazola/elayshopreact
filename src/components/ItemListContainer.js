import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container my-4 text-center">
      <h2 className="display-4">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
