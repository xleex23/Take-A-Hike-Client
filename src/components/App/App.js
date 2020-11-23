import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import Login from '../Login/Login';
import Results from '../../routes/Results/Results';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <main className='main-sect'>
          <Switch>
            <Route exact path={'/'} component={LandingPageRoute} />
            <Route path={'/register'} component={RegistrationRoute} />
            <Route path={'/login'} component={Login} />
            <Route path={'/results'} component={Results} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
