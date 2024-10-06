import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseState from './pages/UseState'
import UseEffect from './pages/useEffect/UseEffect'
import UseLayoutEffect from './pages/useLayoutEffect/UseLayoutEffect'
import UseInsertionEffect from './pages/useInsertionEffect/UseInsertionEffect'
import UseCallback from './pages/useCallback/useCallback'
import { useEffect } from 'react';
import UseDebugValue from './pages/useDebugValue/UseDebugValue';
import UseDeferredValue from './pages/useDeferredValue/UseDeferredValue';
import UseId from './pages/useId/UseId';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
      <Route path="/use-insertion-effect" element={<UseInsertionEffect />} />
      <Route path="/use-callback" element={<UseCallback />} />
      <Route path="/use-debug-value" element={<UseDebugValue />} />
      <Route path="/use-deferred-value" element={<UseDeferredValue />} />
      <Route path="/use-id" element={<UseId />} />
    </Routes>
  );
}

export default AppRoutes;
