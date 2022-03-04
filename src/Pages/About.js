import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Products from '../Pages/Products';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is the About Page</h1>
      <button onClick={() => navigate('/products')}>Go to products</button>
      <Routes>
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default About;
