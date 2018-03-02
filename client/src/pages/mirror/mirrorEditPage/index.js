import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from './../action';

import { MirrorWrapper, MirrorToDo } from './../../../components/Mirror';
import Time from './../data/time';
import Date from './../data/date';
import Weather from './../data/weather';

import { CenterWrapper, HorizontalRowWrapper } from '../../../components/Wrapper';
import { FormWrapper, Form, Input, InputButton  } from './../../../components/Form';
import { MirrorBox } from './../../../components/MirrorLists';

class MirrorEditPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoText: ''
    };
  }

  componentDidMount(){

  };

  handleToDoText(e) {
    this.setState({ toDoText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted new To-do", this.state.toDoText)
  }
  // render functions

  renderMirror() {
    const mirrorList = this.props.auth.currentUser.mirror;

    console.log(mirrorList);
      return (

        <MirrorWrapper>

          <Date/>

          <Time/>

          <MirrorToDo> 3:00 PM You have a homework assignment due to Mrs. Johnsons Class </MirrorToDo>
          <MirrorToDo> 4:54 PM Do not forget to pick up the {this.state.color} Avocados!</MirrorToDo>
          <MirrorToDo> 6:00 PM Dante invited you to make kale smoothie & tacos  </MirrorToDo>
          <MirrorToDo> 8:50 PM Fold laundry and organize papers.  </MirrorToDo>
          <Form>
            <Input type="text" placeholder="Add To-do" onChange={this.handleToDoText.bind(this)} value={this.state.toDoText} />

            <InputButton type="submit" onClick={this.handleSubmit.bind(this)} />
          </Form>
          <Weather/>
        </MirrorWrapper>
      )
  }
  renderToDo(){

  }

  //render

  render() {
    return (
      this.renderMirror()
    );
  }
}

// mapStateToProps

const mapStateToProps = ({ auth, mirror }) => {
  return {
    auth,
    mirror
  }
};

export default connect(mapStateToProps, { ...actions})(MirrorEditPage);
