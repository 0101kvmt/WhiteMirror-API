import React, { Component } from "react";
import { connect } from 'react-redux';

import { FormWrapper, Form, Input, InputButton } from './../../components/Form';

import { CenterWrapper } from './../../components/Wrapper';
class Login extends Component {
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
    console.log(this.state.usernameText);
    this.setState({ usernameText: e.target.value});
  }

  render() {
    return (
      <CenterWrapper>
        <FormWrapper>
          <h2>Login</h2>
          <Form>
            <Input type="text" placeholder="Username" onChange = { this.handleUsernameText.bind(this) } value={ this.state.usernameText } />
            <Input type="text" placeholder="Password" />
            <InputButton type="submit" />
          </Form>

        </FormWrapper>
      </CenterWrapper>
    );
  }
}

export default Login;
