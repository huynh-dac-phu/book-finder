import React from "react";
import { Price, OldPrice } from "components/Masonry/styled";

const getPrice = price => {
  return price
    ? price.amount == 0
      ? ""
      : `${price.amount.toLocaleString(undefined)}  ${price.currencyCode}`
    : null;
};
const PriceBox = ({ isSale, oldPrice, price }) => {
  const saleInfo = isSale === "NOT_FOR_SALE" ? "Not for sale" : null;

  return (
    <>
      <OldPrice>{getPrice(oldPrice)}</OldPrice>
      <Price>
        {saleInfo} {getPrice(price)}
      </Price>
    </>
  );
};

export default PriceBox;
