import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseState from './pages/UseState'
import UseEffect from './pages/useEffect/UseEffect'
import UseCallback from './pages/useCallback/useCallback'
import { useEffect } from 'react';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/use-callback" element={<UseCallback />} />
    </Routes>
  );
}

export default AppRoutes;
