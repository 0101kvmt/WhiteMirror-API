import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  text-align: left;
  color: ${props => props.bloop || 'white'};
  opacity: ${props => props.hidden ? '0' : '100'};
  font-size: 20px;
  background-color: grey;
  width: 250px;
  height: 100%;
  z-index: 10;
`;

const NavLink = styled.div`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: ${props => props.hover ? 'red' : 'blue'};
  display: block;
  transition: 0.3s;
`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'white'
}

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
    };
  }

  render() {
    return (
      <NavContainer>
        <ul>
          <NavLink><Link style={{...LinkStyle}} to="/">Home</Link></NavLink>
          <NavLink><Link style={{...LinkStyle}} to="/mirror">Mirrors</Link></NavLink>
          <NavLink><Link style={{...LinkStyle}} to="/settings">Settings</Link></NavLink>
        </ul>
      </NavContainer>
    );
  }
}

export default Nav;
