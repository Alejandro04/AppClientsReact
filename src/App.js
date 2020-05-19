import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar'
import ClientList from './components/ClientList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ClientList/>
      <Button variant="warning">En desarrollo</Button>
    </div>
  );
}

export default App;
