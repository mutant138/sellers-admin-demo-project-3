import React, { useState, useEffect } from 'react';
import ProductForm from './components/Product/ProductForm';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = loadProductsFromLocalStorage();
    setProducts(storedProducts);
  }, []);
  useEffect(() => {
    saveProductsToLocalStorage(products);
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    saveProductToLocalStorage(newProduct);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.productId !== productId);
    setProducts(updatedProducts);
    removeProductFromLocalStorage(productId);
  };


  const loadProductsFromLocalStorage = () => {
    const storedProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('product_')) {
        const product = JSON.parse(localStorage.getItem(key));
        storedProducts.push(product);
      }
    }
    return storedProducts;
  };

  const saveProductToLocalStorage = (product) => {
    localStorage.setItem(`product_${product.productId}`, JSON.stringify(product));
  };

  const removeProductFromLocalStorage = (productId) => {
    localStorage.removeItem(`product_${productId}`);
  };

  const saveProductsToLocalStorage = (products) => {
    products.forEach(product => {
      saveProductToLocalStorage(product);
    });
  };

  return (
    <div className="App">
      <h1>Product Management System</h1>
      <ProductForm addProduct={addProduct} />
      <hr />
      <h2>Products by Category</h2>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
