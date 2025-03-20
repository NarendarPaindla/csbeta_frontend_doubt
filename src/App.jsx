import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';


const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
