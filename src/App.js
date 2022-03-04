import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Products from './Pages/Products';

import './App.css';

function App() {
  const [cartIsEmpty] = useState(true);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/products" element={<Products />} />

        <Route
          path="/checkout"
          element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
        ></Route>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
