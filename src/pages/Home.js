import React from 'react';
import logo from '../logo.svg'; 
import '../style/Home.css';
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          React Hooks Documentation
        </p>
      </header>
    </div>
  );
}

export default Home;
