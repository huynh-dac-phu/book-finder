import styled from "styled-components";

export const MasonryDiv = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(${props.itemWidth}px, 1fr))`};
  /* grid-gap: ${props => props.gap || `1em`}; */
  padding-top: 30px;
  width: 90%;
  max-width: 1440px;
  height: calc(100vh - 100px);
  overflow: auto;

  &::-webkit-scrollbar {
    position: relative;
    width: 10px;
    z-index: 1;
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
  padding: 0 0.5em;
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
    box-shadow: 0 0 16px 0 ${props => props.theme.color.thirty};
  }
`;

export const Image = styled.img`
  width: 128px;
`;

export const TopBox = styled.div`
  display: flex;
`;

export const ContentBox = styled.div`
  padding: 10px;
`;

export const TitleBox = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;
export const AuthorBox = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const Price = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const OldPrice = styled(Price)`
  color: ${props => props.theme.color.sixth};
  text-decoration: line-through;
`;
export const DateBox = styled.p`
  font-size: 13px;
  font-weight: 500;
`;
