import React from 'react';
import './App.css';
import Usercard from './components/usercard.jsx'; // Fixed import path

function App() {
  const cards = Array.from({ length: 10 });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive layout
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

export default App;
