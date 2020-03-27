import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MasonryWrapper from "components/Masonry/MasonryWrapper";
import PriceBox from "components/Masonry/PriceBox";
import {
  ColorBox,
  Image,
  ContentBox,
  TitleBox,
  AuthorBox,
  DateBox
} from "components/Masonry/styled";
import random from "lodash/random";
import NoImage from "assets/images/no-image.jpg";
import StarRatings from "react-star-ratings";

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
    <MasonryWrapper minWidth={210} onScroll={handleScroll}>
      {listBook.map(book => {
        const {
          title,
          authors,
          publishedDate,
          imageLinks,
          averageRating
        } = book.volumeInfo;
        const { saleability, listPrice, retailPrice } = book.saleInfo;
        return (
          <ColorBox key={book.id} hue={random(0, 340)}>
            <Image src={imageLinks ? imageLinks.thumbnail : NoImage} alt="" />
            <ContentBox>
              <TitleBox>{title}</TitleBox>
              <AuthorBox> {authors && authors.join(" - ")}</AuthorBox>
              {averageRating && (
                <StarRatings
                  rating={averageRating}
                  starRatedColor="white"
                  numberOfStars={5}
                  starDimension={"15px"}
                  starSpacing={"1px"}
                />
              )}
              <DateBox> {publishedDate}</DateBox>
              <PriceBox
                isSale={saleability}
                oldPrice={listPrice}
                price={retailPrice}
              />
            </ContentBox>
          </ColorBox>
        );
      })}
    </MasonryWrapper>
  );
}
