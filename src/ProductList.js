import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: '', stock: '' });

  useEffect(() => {
    // Example fetch from Laravel backend (GET /api/products)
    fetch('http://192.168.1.143:8000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://192.168.1.143:8000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        setProducts([...products, data]);
        setForm({ name: '', price: '', category: '', stock: '' });
      });
  };

  return (
    <div className="container">
      <h2>Product List</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Stock" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} />
        <button type="submit">Add Product</button>
      </form>

      <table>
        <thead>
          <tr><th>Name</th><th>Price</th><th>Category</th><th>Stock</th></tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
