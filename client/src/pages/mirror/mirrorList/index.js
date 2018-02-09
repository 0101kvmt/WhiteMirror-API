import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from './../action';

import { CenterWrapper, HorizontalRowWrapper } from '../../../components/Wrapper';
import { Form, Input } from './../../../components/Form';
import { MirrorBox } from './../../../components/MirrorLists';

class MirrorList extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount(){

  };
  renderMirrors() {
      return(
        <CenterWrapper>
          <HorizontalRowWrapper>
            {this.props.auth.currentUser.mirror.map((m, i) => {
              <MirrorBox onClick={this.viewMirror.bind(this)} > {m._id} </MirrorBox>
            })}
            <MirrorBox onClick={this.addMirror.bind(this)} > add me </MirrorBox>
            </HorizontalRowWrapper>
      </CenterWrapper>
      )
  }
  viewMirror() {
    console.log("Mirror Viewed");
  }
  addMirror() {
    console.log("Mirror Added");
  }
  render() {
    console.log("mirror List", this.props);


    return (
      this.renderMirrors()
    );
  }
}

const mapStateToProps = ({ auth, mirror }) => {
  return {
    auth,
    mirror
  }
};

export default connect(mapStateToProps, { ...actions})(MirrorList);
