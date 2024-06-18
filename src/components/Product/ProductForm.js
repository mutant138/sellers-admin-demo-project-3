import React, { useState } from 'react';
import "./Product.module.css"

const ProductForm = ({ addProduct }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productId: productId,
      productName: productName,
      price: price,
      category: category
    };
    addProduct(newProduct);
    setProductId('');
    setProductName('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product ID:</label>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
      <br />
      <label>Product Name:</label>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      <br />
      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <br />
      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        <option value="clothes">Clothes</option>
      </select>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
