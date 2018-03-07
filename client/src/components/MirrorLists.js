import styled from 'styled-components';

export const MirrorBox = styled.div`
  border-radius: 14px;
  width: 140px;
  height: 200px;
  margin: 15px;
  border: solid 1px white;
  padding: 14px;
  cursor: ${props => props.clickable ? 'pointer' : ''};
`;

export const MirrorBoxTitle = styled.div`
padding: 8px 8px 8px 32px;
text-decoration: none;
font-size: 25px;
color: ${props => props.hover ? 'red' : 'blue'};
display: ${props => props.hidden ? 'none' : 'block'};
opacity: 100;
transition: 1s;
`;

export const MirrorDelete = styled.div`
  position: relative;
  float: right;
  cursor: pointer;
`;

export const LinkStyle = {
  textDecoration: 'none',
  color: 'white'

}
