import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/routes/Register';
import Login from './components/routes/login';
import Landingpage from './components/routes/landingpage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landingpage/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App