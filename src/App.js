import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button variant="warning">En desarrollo</Button>
    </div>
  );
}

export default App;
