import React from "react";

const PriceBox = ({ isSale, price }) => {
  const saleInfo = isSale == "OT_FOR_SALE" ? "Not for sale" : null;
  const priceInfo = price ? price.amount : null;

  return <p>{saleInfo + priceInfo}đ</p>;
};

export default PriceBox;
