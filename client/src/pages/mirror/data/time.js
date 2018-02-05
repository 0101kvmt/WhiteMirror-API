import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

import { MirrorTime, MirrorDate, MirrorTimeAMPM } from './../../../components/Mirror';

class Time extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currTime: moment(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  Time() {
    this.setState({currTime: moment()});
  }

  render() {
    const currTime = this.state.currTime.format('h:mm:ss a')
    return (
      <MirrorTime> {currTime} </MirrorTime>
    );
  }
}

export default Time;
