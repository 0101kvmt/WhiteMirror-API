import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';


import Mirror from './pages/mirror';
import Registration from './pages/registration';
import Home from './pages/home';

import { MenuBtn } from './components/MenuBtn';
import { Wrapper } from './components/Wrapper';
import { NavContainer, NavLink } from './components/Nav';

const LinkStyle = {
  textDecoration: 'none',
  color: 'white'
}




class App extends Component {
  render() {

    const handleClick = () => {
      console.log("yee haw!");
    }

    return (
      <div className={this.props.className}>
      <BrowserRouter>
        <Wrapper>

          <MenuBtn href="#" onClick={handleClick}> W </MenuBtn>

          <NavContainer bloop={location}>
            <ul>
              <NavLink><Link style={{...LinkStyle}} to="/">Home</Link></NavLink>
              <NavLink><Link style={{...LinkStyle}} to="/registration">Registration</Link></NavLink>
              <NavLink><Link style={{...LinkStyle}} to="/mirror">Mirrors</Link></NavLink>
            </ul>
          </NavContainer>
               <Route exact path="/" component={Home}/>
               <Route path="/mirror" component={Mirror}/>
               <Route path="/registration" component={Registration}/>

        </Wrapper>
      </BrowserRouter>
      </div>

    )
  }
}

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;


export default styled(App)`
  background-color: black;
`;
