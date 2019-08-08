import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Transaction from './components/Transaction/Transaction';
import Transfer from './components/Transfer/Transfer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
      <Landing />
      <Transaction />
      <Transfer />
    </div>
  );
}

export default App;
