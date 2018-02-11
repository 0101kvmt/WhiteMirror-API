import React, { Component } from "react";
import { connect } from 'react-redux';

import { FormWrapper, Form, Input, InputButton } from './../../../components/Form';
import { CenterWrapper } from './../../../components/Wrapper';

import * as actions from './../actions';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      usernameText: '',
      passwordText: ''
    }
  }
  componentDidMount() {

  }

  handleUsernameText(e) {
    this.setState({ usernameText: e.target.value});
  }

  handlePasswordText(e) {
    this.setState({ passwordText: e.target.value});
  }

  handleSubmit() {
    if(this.state.usernameText.length == 0 || this.state.passwordText == 0) {
      return ;
    }
    let username = this.state.usernameText;
    let password = this.state.passwordText;

    this.props.newUser(username, password);
  }

  render() {
    return (
      <CenterWrapper>
        <FormWrapper>
          <h2>Login</h2>
          <Form>
            <Input type="text" placeholder="Username" onChange={this.handleUsernameText.bind(this)} value={this.state.usernameText} />
            <Input type="text" placeholder="Password" onChange={this.handlePasswordText.bind(this)} value={this.state.passwordText} />
          </Form>
          <InputButton type="submit" onClick={this.handleSubmit.bind(this)} />

        </FormWrapper>
      </CenterWrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, { ...actions})(Register);
