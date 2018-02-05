import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Mirror from './../mirror';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Mirror/>
    );
  }
}

export default connect() (Home);
