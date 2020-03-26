import React from "react";
import MasonryWrapper from "components/Masonry/MasonryWrapper";
import PriceBox from "components/Masonry/PriceBox";
import { useSelector, useDispatch } from "react-redux";
import { ColorBox, Image, ContentBox } from "components/Masonry/styled";
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
        const { saleability, retailPrice } = book.saleInfo;
        return (
          <ColorBox key={book.id} hue={random(0, 340)}>
            <Image src={imageLinks ? imageLinks.thumbnail : NoImage} alt="" />
            <ContentBox>
              <p>{title}</p>
              <p> {authors && authors.join(" - ")}</p>
              <p> {publishedDate}</p>
              <PriceBox isSale={saleability} price={retailPrice} />
              {averageRating && (
                <StarRatings
                  rating={averageRating}
                  starRatedColor="white"
                  numberOfStars={5}
                  starDimension={"15px"}
                  starSpacing={"2px"}
                />
              )}
            </ContentBox>
          </ColorBox>
        );
      })}
    </MasonryWrapper>
  );
}
