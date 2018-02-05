import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

import { MirrorDate } from './../../../components/Mirror';

class Date extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currDate: moment(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({currDate: moment()});
    }, 1000 * 60 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currDate = 'Today, ' + this.state.currDate.format('MMMM Do YYYY');
    return (
      <MirrorDate> {currDate} </MirrorDate>
    );
  }
}

export default Date;
