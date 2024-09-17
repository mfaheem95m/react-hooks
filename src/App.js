import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './Routes';
import './App.css';
import Layout from './layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
