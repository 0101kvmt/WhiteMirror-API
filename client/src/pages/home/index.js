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
    this.getLocation();
  }
  getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
        console.log("latitude", position.coords.latitude);
        console.log("longitude", position.coords.longitude);
        });
      } else {
        console.log("failed to geolocate");
      }
  }

  render() {

    return (
      <Mirror/>
    );
  }
}
const mapStateToProps = ({ mirror }) => {
  return {
    mirror
  }
}

export default connect(mapStateToProps, { ...actions})(Home);
