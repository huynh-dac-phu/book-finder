import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from { left: -100%;}
  to { left: 100%;}
`;

export const AppWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  overflow: hidden;
  z-index: 4;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    z-index: 2;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 19%,
      rgba(189, 36, 253, 1) 50%,
      rgba(253, 43, 206, 1) 76%,
      rgba(252, 176, 69, 1) 100%
    );
    animation: ${loading} 1s linear infinite;
  }
`;
