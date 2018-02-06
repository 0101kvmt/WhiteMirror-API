import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import {MenuBtn} from './Menubtn';

const NavContainer = styled.div`
  position: absolute;
  color: ${props => props.bloop || 'white'};
  background-color: transparent;
  width: 250px;
  height: 100%;
  z-index: 10;
  opacity: ${props => props.hidden ? '0' : '100'};
  transition: 1s;
  -webkit-transition: opacity 2s, height 2s, background-color 2s, -webkit-transform 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
`;

const NavLink = styled.div`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: ${props => props.hover ? 'red' : 'blue'};
  display: block;
  opacity: 100;
  transition: 1s;
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
            <NavLink onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/login">Settings</Link></NavLink>
          </ul>
        </NavContainer>
      </WholeContainer>
    );
  }
}

export default Nav;
