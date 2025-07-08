import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart({ ...cart, [product._id]: product });
  };

  const handleRemoveFromCart = (productId) => {
    setCart({ ...cart, [productId]: undefined });
  };

  return (
    <div>
      <h1>Ecommerce Website</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {Object.keys(cart).map((productId) => (
          <li key={productId}>
            <h2>{cart[productId].name}</h2>
            <p>Quantity: 1</p>
            <button onClick={() => handleRemoveFromCart(productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

**Database (MongoDB)**