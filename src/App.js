import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';

function App() {  
  return (
    <main>
      <section className="container">
        <header className="title">
          <h2>NCAA Champions by State</h2>
          <div className="underline"></div>
        </header>
        <Dashboard />            
      </section>
    </main>
  );
}

export default App;
