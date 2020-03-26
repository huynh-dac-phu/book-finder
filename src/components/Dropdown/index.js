import React, { useState } from "react";
import {
  DropdownWrapper,
  DropdownList,
  DropdownItem,
  Icon
} from "components/Dropdown/styled";

const Dropdown = ({ handleSelect }) => {
  const [hideDropdown, setHideDropdown] = useState(true);

  const handleChange = e => {
    handleSelect(e.currentTarget.dataset.value);
    setHideDropdown(!hideDropdown);
  };

  const handleShow = () => {
    setHideDropdown(!hideDropdown);
  };
  return (
    <>
      <DropdownWrapper>
        <DropdownList isHide={hideDropdown}>
          <DropdownItem onClick={handleChange} data-value="intitle" selected>
            by title
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="inauthor">
            by author
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="inpublisher">
            by publisher
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="subject">
            by category
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="isbn">
            by International Standard Book Number
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="lccn">
            by Library of Congress Control Number
          </DropdownItem>
          <DropdownItem onClick={handleChange} data-value="oclc">
            by Online Computer Library Center
          </DropdownItem>
        </DropdownList>
      </DropdownWrapper>
      <Icon type="button" onClick={handleShow} />
    </>
  );
};

export default Dropdown;
