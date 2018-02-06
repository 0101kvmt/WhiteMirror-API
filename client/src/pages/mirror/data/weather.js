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
    this.props.getWeather(37.3382080, -121.8863290);
  }
  componentDidMount() {
    console.log("weather mounto");

  }
  render() {
    if(!this.props.mirror.weather.currently){
      return(
        <p> loading.. </p>
      );
    } else {
      console.log("props",this.props.mirror.weather.currently);
      const icon = this.props.mirror.weather.currently.icon;
      const temperature = this.props.mirror.weather.currently.temperature;
      const summary = this.props.mirror.weather.currently.summary;
      return (
        <p>
          Nice Weather eh? {icon}, {temperature}, {summary}

        </p>
      );
    }
  }
}

const mapStateToProps = ({ mirror }) => {
  return {
    mirror
  }
}

export default connect(mapStateToProps, { ...actions })(Weather);
