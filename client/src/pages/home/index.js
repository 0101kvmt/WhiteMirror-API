import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from './actions';

import Mirror from './../mirror';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentDidMount() {

  }


  render() {

    return (
      <Mirror />
    );
  }
}
const mapStateToProps = ({ mirror }) => {
  return {
    mirror
  }
}

export default connect(mapStateToProps, { ...actions})(Home);
