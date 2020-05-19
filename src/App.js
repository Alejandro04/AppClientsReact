import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ClientList from './components/ClientList'
import ClientModal from './components/ClientModal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <ClientModal />
            <ClientList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
