import React, { useEffect, useRef, useState } from "react";
import { Col, MasonryDiv } from "components/Masonry/styled";
import { useEventListener } from "../Hooks/useEventListener";

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child));
};

export default function MasonryWrapper({
  children,
  gap,
  minWidth = 500,
  ...rest
}) {
  const ref = useRef();
  const [numCols, setNumCols] = useState(1);

  const cols = [...Array(numCols)].map(() => []);
  fillCols(children, cols);

  const resizeHandler = () => {
    return setNumCols(Math.floor(ref.current.offsetWidth / minWidth));
  };

  useEffect(resizeHandler, []);

  useEventListener(`resize`, e => {
    // console.log(ref.current.offsetWidth, numCols, cols);
    resizeHandler();
  });

  return (
    <MasonryDiv itemWidth={minWidth} ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  );
}
