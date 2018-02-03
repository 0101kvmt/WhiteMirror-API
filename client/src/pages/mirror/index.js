import React, { Component } from "react";
import styled from 'styled-components';

import { MirrorWrapper, MirrorTime, MirrorDate, MirrorTimeAMPM, MirrorToDo } from './../../components/Mirror';


class Mirror extends Component {
  render() {
    return (
      <MirrorWrapper>

        <MirrorDate>Today, January 28, 2018</MirrorDate>

        <MirrorTime>08:54:03
          <MirrorTimeAMPM>am</MirrorTimeAMPM>
        </MirrorTime>

        <MirrorToDo> 3:00 PM - You have a homework assignment due to Mrs. Johnsons Class </MirrorToDo>
        <MirrorToDo> 4:54 PM - Do not forget to pick up the Avocados!</MirrorToDo>
        <MirrorToDo> 6:00 PM - Dante invited you to make kale smoothie & tacos  </MirrorToDo>
        <MirrorToDo> 8:50 PM - Fold laundry and organize papers.  </MirrorToDo>

      </MirrorWrapper>
    );
  }
}

export default Mirror;
