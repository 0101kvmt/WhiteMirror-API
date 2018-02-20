import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FormWrapper, Form, Input, InputButton } from './../../../components/Form';
import { CenterWrapper } from './../../../components/Wrapper';

import * as actions from './../actions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      usernameText: '',
      passwordText: '',
      redirect: false
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

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.usernameText.length == 0 || this.state.passwordText == 0) {
      return ;
    }

    let username = this.state.usernameText;
    let password = this.state.passwordText;

    this.props.authenticate(username, password)
      .then(() => {
        if(this.props.auth.isAuthenticated) {
          console.log("redirect");
          this.setState({redirect: true});
        } else {
          console.log(this.props.auth.errorMessage);
        }

      });
  }


  render() {
    let {from} = { from: { pathname: "/" } };

    if (this.state.redirect) {
      return <Redirect to={from} />;
    }

    return (
      <CenterWrapper>
        <FormWrapper>
          <h2>Login</h2>
          <Form>
            <Input type="text" placeholder="Username" onChange={this.handleUsernameText.bind(this)} value={this.state.usernameText} />
            <Input type="password" placeholder="Password" onChange={this.handlePasswordText.bind(this)} value={this.state.passwordText} />
            <InputButton type="submit" onClick={this.handleSubmit.bind(this)} />
          </Form>


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

export default connect(mapStateToProps, { ...actions})(Login);
