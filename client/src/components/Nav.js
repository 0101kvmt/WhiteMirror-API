import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';

import {MenuBtn} from './MenuBtn';
import * as actions from './../pages/auth/actions';

const socket = socketIOClient();

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
  display: ${props => props.hidden ? 'none' : 'block'};
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


// Nav Component


class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
      linkHidden:  this.props.auth.currentUser == null ? false : true
    };
        console.log("NAVE");
    console.log(socket);

    socket.on('userUpdated', (data) => {
      console.log('user Update');
      console.log(data);
      this.setState({linkHidden: this.props.auth.currentUser == null ? false : true})
    })
  }

  menuClick(){
    console.log("menu clicked");
    this.setState(prevState => ({
      menuHidden: !prevState.menuHidden,
    }));
  };

  logout() {
    this.setState(prevState => ({
      menuHidden: !prevState.menuHidden,
      linkHidden: this.props.auth.currentUser == null ? false : true
    }));
    this.props.logOut();
  };

  render() {
    return (
      <WholeContainer>
        <MenuBtn href="#" onClick = {this.menuClick.bind(this)} show={!this.state.menuHidden}> W </MenuBtn>
        <NavContainer hidden={this.state.menuHidden}>
          <ul>
            <NavLink onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/">Home</Link></NavLink>
            <NavLink hidden={!this.state.linkHidden} onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/mirrorlist">Mirrors</Link></NavLink>
            <NavLink hidden={this.state.linkHidden} onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/login">Login</Link></NavLink>
            <NavLink hidden={this.state.linkHidden} onClick = {this.menuClick.bind(this)}><Link style={{...LinkStyle}} to="/register">Register</Link></NavLink>
            <NavLink hidden={!this.state.linkHidden} onClick = {this.logout.bind(this)}><Link style={{...LinkStyle}} to="/">Logout</Link></NavLink>
          </ul>
        </NavContainer>
      </WholeContainer>
    );
  }
};
const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
};


export default connect(mapStateToProps, { ...actions })(Nav);
