import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Mirror from './pages/mirror';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/mirror">Mirrors</Link></li>
           </ul>

           <hr/>

           <Route exact path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/mirror" component={Mirror}/>
         </div>
      </BrowserRouter>
    )
  }
}


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)



export default App;
