import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {

    const [selected, setSelected] = useState();

    

    return (
        <div>
            <h2>Hello</h2>
            <button onClick={() => setSelected(!selected)}
                style={{ backgroundColor: selected ? 'blue' : 'gray' }}>button</button>
        </div>
    );
}   