import styled from "styled-components";

export const Wrapper = styled.div`
  postition: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: black;
  z-index: 9;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 19;
`;

export const HorizontalRowWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
