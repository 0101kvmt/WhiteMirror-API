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
    this.interval = setInterval(() => {
      this.setState({currTime: moment()});
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currTime = this.state.currTime.format('h:mm:ss');
    const currAMPM = this.state.currTime.format('a');
    return (
      <MirrorTime>
        {currTime}<MirrorTimeAMPM> {currAMPM}</MirrorTimeAMPM>
      </MirrorTime>

    );
  }
}

export default Time;
