import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar" style = {{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            background: '#f4f4f4',
            borderBottom: '1px solid #ddd'
        }}>
            <h2>Portfolio</h2>
            <div className = "nav-links" style={{ display: 'flex', gap: '15px' }}>
                <Link to="/">Home</Link>
                <Link to="/topic1">Human-Centered Design</Link>
                <Link to="/topic2">Six Sigma</Link>
                <Link to="/topic3">SPC / Variation</Link>
                <Link to="/topic4">Risk Management</Link>
                <Link to="/topic5">Simulation</Link>
            </div>
        </nav>
    );
}