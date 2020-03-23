import styled from 'styled-components'

export const MasonryDiv = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(${props.itemWidth}px, 1fr))`};
  grid-gap: ${props => props.gap || `1em`};
`

export const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `1em`};
`