import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseState from './pages/UseState'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-state" element={<UseState />} />
    </Routes>
  );
}

export default AppRoutes;
