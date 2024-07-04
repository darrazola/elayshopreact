const items = [
  {
    id: 1,
    name: 'Camiseta Deportiva',
    description: 'Camiseta ideal para practicar deporte.',
    category: 'ropa-deportiva',
    stock: 10,
    price: 25.99,
    thumbnail: 'camiseta-deportiva-thumbnail.jpg',
    catalog: 'camiseta-deportiva-catalog.jpg',
    detail: 'camiseta-deportiva-detail.jpg'
  },
  {
    id: 2,
    name: 'Camisa Formal',
    description: 'Perfecta para ocasiones formales.',
    category: 'ropa-hombres',
    stock: 15,
    price: 35.99,
    thumbnail: 'camisa-formal-thumbnail.jpg',
    catalog: 'camisa-formal-catalog.jpg',
    detail: 'camisa-formal-detail.jpg'
  },
  {
    id: 3,
    name: 'Blusa Casual',
    description: 'Ideal para un look casual.',
    category: 'ropa-mujeres',
    stock: 20,
    price: 19.99,
    thumbnail: 'blusa-casual-thumbnail.jpg',
    catalog: 'blusa-casual-catalog.jpg',
    detail: 'blusa-casual-detail.jpg'
  },
];

export const mockFetchAllItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 500);
  });
};

export const mockFetchItemById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find(item => item.id === id));
    }, 500);
  });
};

export const mockFetchItemsByCategory = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter(item => item.category === category));
    }, 500);
  });
};
