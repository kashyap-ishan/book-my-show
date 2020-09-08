import React from 'react';
import Routes from './routes';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Routes {...props} />
    </div>
  );
}

export default App;
