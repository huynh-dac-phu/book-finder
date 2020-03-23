import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.gridGap};
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(${props.itemWidth}px, 1fr))`};
  grid-auto-rows: 10px;
`;

export const MasonryGridItem = styled.div`
  border-radius: 5px;
`;

export const Content = styled.div`
  background: red;
  text-align: center;
  color: #fff;
`;
