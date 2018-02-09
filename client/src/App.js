import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import { loadState, saveState } from './../localStorage.js';

import MirrorList from './pages/mirror/mirrorList';
import Time from './pages/mirror/data/time';
import Home from './pages/home';
import Settings from './pages/settings';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

import { Wrapper } from './components/Wrapper';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Wrapper>
          <Nav />
               <Route exact path="/" component={Home}/>
               <Route path="/mirrorlist" component={MirrorList}/>
               <Route path="/time" component={Time}/>
               <Route path="/settings" component={Settings}/>
               <Route path="/login" component={Login}/>
               <Route path="/register" component={Register}/>
        </Wrapper>
      </BrowserRouter>
      </PersistGate>
      </Provider>

    )
  }
}

export default App;
