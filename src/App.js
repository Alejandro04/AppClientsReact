import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ClientList from './components/ClientList'
import ClientModal from './components/ClientModal'
import UserList from './components/UserList'
import Dashboard from './components/Dashboard'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authAction'

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser(localStorage.getItem('email')))
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Container>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/clients' component={ClientList} />
                <Route path='/users' component={UserList} />
              </Switch>
            </Container>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
