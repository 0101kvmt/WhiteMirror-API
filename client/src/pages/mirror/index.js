import React, { Component } from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: blue;
  font-size: 100px;
`
class Mirror extends Component {
  render() {
    return (
      <div>
        <Title>MIRROR</Title>

      </div>
    );
  }
}

export default Mirror;
