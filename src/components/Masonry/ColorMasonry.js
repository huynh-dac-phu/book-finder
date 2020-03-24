import React, { useState } from "react";
import Masonry from "components/Masonry";
import shuffle from "lodash/shuffle";
import random from "lodash/random";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ColorBox = styled.div`
  border-radius: 1em;
  transition: 0.2s;
  justify-content: center;
  align-content: center;
  display: grid;
  color: white;
  background: ${props => props.background};
  min-height: ${props => props.minHeight};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px 0 ${props => props.theme.lightGray};
  }
`;

const data = [
  [`5em`, `linear-gradient(45deg, #f05f70, #164b78)`],
  [`2em`, `linear-gradient(45deg, #5cb767, #2e9fff)`],
  [`4em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`],
  [`7em`, `linear-gradient(45deg, #f093fb, #f5576c)`],
  [`1em`, `linear-gradient(45deg, #ffd34f, #2e9fff)`],
  [`3em`, `linear-gradient(45deg, #d299c2, #fef9d7)`],
  [`2em`, `linear-gradient(45deg, #f6d365, #fda085)`],
  [`5em`, `linear-gradient(45deg, #164b78, #ffd34f)`],
  [`5em`, `linear-gradient(45deg, #96fbc4, #f9f586)`]
];

export default function ColorMasonry() {
  const listBook = useSelector(state => state.books.listBook);
  return (
    <Masonry minWidth={300} css="margin: 2em 0;">
      {listBook.map(book => {
        const index = random(0, 8);
        return (
          <ColorBox
            key={book.id}
            minHeight={data[index][0]}
            background={data[index][1]}
          >
            <p>title: {book.volumeInfo.title}</p>
            <p>authors: { book.volumeInfo.authors && book.volumeInfo.authors.join(" - ")}</p>
            <p>day: {book.volumeInfo.publishedDate}</p>
          </ColorBox>
        );
      })}
    </Masonry>
  );
}
