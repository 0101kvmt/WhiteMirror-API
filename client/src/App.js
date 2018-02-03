import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


import Mirror from './pages/mirror';
import Registration from './pages/registration';
import Home from './pages/home';

import Wrapper from './components/Wrapper';
import Nav from './components/Nav';


class App extends Component {
  render() {
    const location = null;
    console.log(location);
    return (

      <BrowserRouter>
            <div className={this.props.className}>
      <Wrapper>
      <div>
      <Nav bloop={location}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/mirror">Mirrors</Link></li>
        </ul>
      </Nav>


           <hr/>

           <Route exact path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/mirror" component={Mirror}/>
           <Route path="/registration" component={Registration}/>
         </div>
      </Wrapper>
            </div>
      </BrowserRouter>


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


const About = () => (
  <div className={this.props.className}>
  <Button> Im a button yee haw </Button>
    <h2>About</h2>
  </div>
)



export default styled(App)`
  background-color: yellow;
  text-align: center;
  color: orange;
`;
