import styled from 'styled-components';

export default styled.div`
  position: aboslute;
  text-align: left;
  color: ${props => props.bloop || 'white'};
  opacity: ${props => props.hidden ? '0%' : '100%'};
  font-size: 20px;
  background-color: "yellow";
`;
