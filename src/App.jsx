import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
