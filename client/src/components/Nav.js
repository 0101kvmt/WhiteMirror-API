import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import {MenuBtn} from './Menubtn';

const NavContainer = styled.div`
  position: absolute;
  color: ${props => props.bloop || 'white'};
  opacity: ${props => props.hidden ? '0' : '100'};
  background-color: grey;
  width: 250px;
  height: 100%;
  z-index: 10;
  transition: 3s;
`;

const NavLink = styled.div`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: ${props => props.hover ? 'red' : 'blue'};
  display: block;
  opacity: 100;
  transition: 3s;
`;

const WholeContainer = styled.div`
  position: absolute;
  text-align: left;
  color: transparent;
  font-size: 20px;
  background-color: transparent;
  width: 250px;
  height: 100%;
  opacity: 100;
  z-index: 10;
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

  menuClick(){
    console.log("menu clicked");
    this.setState(prevState => ({
      menuHidden: !prevState.menuHidden
    }));
  }

  render() {
    return (
      <WholeContainer>
        <MenuBtn href="#" onClick = {this.menuClick.bind(this)} show={!this.state.menuHidden}> W </MenuBtn>
        <NavContainer hidden={this.state.menuHidden}>
          <ul>
            <NavLink onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/">Home</Link></NavLink>
            <NavLink onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/mirror">Mirrors</Link></NavLink>
            <NavLink onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/settings">Settings</Link></NavLink>
          </ul>
        </NavContainer>
      </WholeContainer>
    );
  }
}

export default Nav;
