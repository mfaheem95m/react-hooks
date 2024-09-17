import React from 'react';
import '../style/layout.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout({ children }) {
    return (
        <div className="layout">
            <header className="layout-header">
                <Header />
            </header>
            <div className="layout-body">
                <Sidebar />
                <main className="layout-main">
                    {children}
                </main>
            </div>
            <footer className="layout-footer">
                <p>© 2024 My React Hooks Documentation</p>
            </footer>
        </div>
    );
}

export default Layout;
