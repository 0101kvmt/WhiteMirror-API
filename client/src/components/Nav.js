import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  text-align: left;
  color: ${props => props.bloop || 'white'};
  opacity: ${props => props.hidden ? '0' : '100'};
  font-size: 20px;
  background-color: grey;
  width: 250px;
  height: 100%;
  z-index: 10;
`;

export const NavLink = styled.div`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: ${props => props.hover ? 'red' : 'blue'};
  display: block;
  transition: 0.3s;
`;
