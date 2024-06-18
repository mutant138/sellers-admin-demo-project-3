import React from 'react';
import "./ProductList.module.css"
const ProductList = ({ products, deleteProduct }) => {
  const renderProducts = (category) => {
    return products
      .filter(product => product.category === category)
      .map(product => (
        <div key={product.productId}>
          <p><strong>{product.productName}</strong> - {product.price}</p>
          <button onClick={() => deleteProduct(product.productId)}>Delete</button>
        </div>
      ));
  };

  return (
    <div>
      <h3>Food</h3>
      {renderProducts('food')}
      <h3>Electronics</h3>
      {renderProducts('electronics')}
      <h3>Clothes</h3>
      {renderProducts('clothes')}
    </div>
  );
};

export default ProductList;
