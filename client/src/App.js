import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

import Mirror from './pages/mirror';
import Registration from './pages/registration';
import Home from './pages/home';
import Settings from './pages/settings';

import { Wrapper } from './components/Wrapper';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Nav />
               <Route exact path="/" component={Home}/>
               <Route path="/mirror" component={Mirror}/>
               <Route path="/settings" component={Settings}/>

        </Wrapper>
      </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
