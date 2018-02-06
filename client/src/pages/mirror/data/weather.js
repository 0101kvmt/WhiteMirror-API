import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actions from './../action';

class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: true,
    };
  }
  componentDidMount() {
    console.log("weather mounto");
    this.props.getWeather(37.3382080, -121.8863290);
  }
  render() {
    console.log("props", this.props);
    return (
      <p>
        Nice Weather eh?
      </p>
    );
  }
}

const mapStateToProps = ({ mirror }) => {
  return {
    mirror
  }
}

export default connect(mapStateToProps, { ...actions })(Weather);
