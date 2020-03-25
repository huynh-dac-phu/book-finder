import React from "react";
import MasonryWrapper from "components/Masonry/MasonryWrapper";
import { useSelector, useDispatch } from "react-redux";
import { ColorBox,Image, ContentBox } from "components/Masonry/styled";
import random from "lodash/random";
import NoImage from 'assets/images/no-image.jpg';

export default function Masonry() {
  const listBook = useSelector(state => state.books.listBook);
  const dispatch = useDispatch();

  const handleScroll = e => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      dispatch({ type: "INCREMENT_MAX_RESULT" });
      dispatch({ type: "GET_MORE_BOOK" });
    }
  };

  return (
    <MasonryWrapper minWidth={210}  onScroll={handleScroll}>
      {listBook.map(book => {
        const { title, authors, publishedDate, imageLinks } = book.volumeInfo;
        return (
          <ColorBox key={book.id} hue={random(0, 340)}>
               <Image src={ imageLinks ? imageLinks.thumbnail : NoImage} alt="" />
            <ContentBox>
              <p>{title}</p>
              <p> {authors && authors.join(" - ")}</p>
              <p> {publishedDate}</p>
            </ContentBox>
          </ColorBox>
        );
      })}
    </MasonryWrapper>
  );
}
