import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { MirrorWrapper, MirrorToDo } from './../../components/Mirror';
import Time from './data/time';
import Date from './data/date';

class Mirror extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
    };
  }

  render() {
    return (
      <MirrorWrapper>

        <Date/>

        <Time/>


        <MirrorToDo> 3:00 PM You have a homework assignment due to Mrs. Johnsons Class </MirrorToDo>
        <MirrorToDo> 4:54 PM Do not forget to pick up the {this.state.color} Avocados!</MirrorToDo>
        <MirrorToDo> 6:00 PM Dante invited you to make kale smoothie & tacos  </MirrorToDo>
        <MirrorToDo> 8:50 PM Fold laundry and organize papers.  </MirrorToDo>

      </MirrorWrapper>
    );
  }
}

export default Mirror;
