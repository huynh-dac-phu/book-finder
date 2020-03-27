import React, { useState, useRef } from "react";
import {
  DropdownWrapper,
  Wrapper,
  Input,
  DropdownList,
  DropdownItem,
  Icon
} from "components/Dropdown/styled";
import { useClickOutSide } from "components/Hooks/useClickOutSide";

const Dropdown = ({ handleSelect }) => {
  const [hideDropdown, setHideDropdown] = useState(true);
  const [optionValue, setOptionValue] = useState("by title");
  const ref = useRef(null);

  const handleChange = e => {
    handleSelect(e.currentTarget.dataset.value);
    setOptionValue(e.currentTarget.innerHTML);
    setHideDropdown(!hideDropdown);
  };

  const handleShow = () => {
    if (hideDropdown) {
      setHideDropdown(false);
    }
  };

  useClickOutSide(ref, () => {
    setHideDropdown(true);
  });

  return (
    <DropdownWrapper ref={ref}>
      <Wrapper>
        <Input type="text" disabled value={optionValue} />
      </Wrapper>
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
      <Icon type="button" onClick={handleShow} />
    </DropdownWrapper>
  );
};

export default Dropdown;
