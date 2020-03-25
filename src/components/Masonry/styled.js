import styled from "styled-components";

export const MasonryDiv = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(${props.itemWidth}px, 1fr))`};
  /* grid-gap: ${props => props.gap || `1em`}; */
  padding: 0 15px;
  width: 90%;
  max-width: 1440px;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 5px;
    outline: 1px solid ${props => props.theme.color.tenth};
    
  }
`;

export const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `1em`};
  padding: 0 .5em;
`;

export const ColorBox = styled.div`
  transition: 0.2s;
  color: #fff;
  background: linear-gradient(
    45deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  min-height: ${props => props.minHeight};
  box-shadow: 0 0 12px 0 ${props => props.theme.color.tenth};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 16px 0 ${props => props.theme.color.fourty};
  }
`;

export const Image = styled.img`
  width: 128px;
`

export const ContentBox = styled.div`
  padding: 10px;
`
