import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from './../auth/actions';

import Mirror from './../mirror';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentDidMount() {
    if(!this.props.auth.token == ''){
      this.props.validateToken(this.props.auth.token);
    }

  }


  render() {

    return (
      <Mirror />
    );
  }
}
const mapStateToProps = ({ auth, mirror }) => {
  return {
    auth,
    mirror
  }
}

export default connect(mapStateToProps, { ...actions})(Home);
