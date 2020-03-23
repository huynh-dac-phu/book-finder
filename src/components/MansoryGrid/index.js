import React, { Component, createRef } from "react";
import imagesLoaded from "imagesloaded";
import { Grid, Content } from "components/MansoryGrid/styled";

class MasonryGrid extends Component {
  constructor(props) {
    super(props);
    this.gridItem = createRef();
    this.masonry = createRef();
  }

  componentDidMount() {
    window.onload = this.resizeAllGridItems();
    window.addEventListener("resize", this.resizeAllGridItems);

    // imagesLoaded(this.gridItem.current, this.resizeInstance);

    let allItems = document.getElementsByClassName("masonry-grid--item");
    for (let x = 0; x < allItems.length; x++) {
      imagesLoaded(allItems[x], this.resizeInstance);
    }
  }

  resizeAllGridItems = () => {
    // this.resizeGridItem(this.gridItem.current)
    let allItems = document.getElementsByClassName("masonry-grid--item");
    for (let x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  };

  resizeGridItem = item => {
    let grid = document.getElementsByClassName("masonry-grid")[0];
    let rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    let rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    let rowSpan = Math.ceil(
      (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
  };

  resizeInstance = instance => {
    let item = instance.elements[0];
    this.resizeGridItem(item);
  };

  render() {
    const { children, itemWidth, gridGap } = this.props;
    return (
      <Grid ref={this.masonry} className="masonry-grid" itemWidth={itemWidth}  gridGap={gridGap}>
        {children.length >= 1 &&
          children.map((item, index) => {
            return (
              <div
                className="masonry-grid--item"
                key={index}
                ref={this.gridItem}
              >
                <Content className="content">{item}</Content>
              </div>
            );
          })}
      </Grid>
    );
  }
}

export default MasonryGrid;
