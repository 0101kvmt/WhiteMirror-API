import styled from "styled-components";

export const MenuBtn = styled.a`
  position: absolute;
  text-decoration: none;
  border-radius: 3px;
  width: 50px;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-align: center;
  font-family: Raleway;
  z-index: 12;
  margin: 10px;
  opacity: ${props => props.show ? '0' : '100'};
  transition: .5s;
`;
